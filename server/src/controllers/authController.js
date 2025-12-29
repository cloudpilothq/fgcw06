const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if user exists
        const userResult = await pool.query(
            'SELECT u.*, p.full_name FROM users u JOIN profiles p ON u.id = p.user_id WHERE u.email = $1',
            [email]
        );

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const user = userResult.rows[0];

        // 2. Verify account is APPROVED by Admin
        if (user.status === 'PENDING') {
            return res.status(403).json({ 
                message: "Your account is still pending approval by the FGCW 06 Executives." 
            });
        }

        if (user.status === 'DEACTIVATED') {
            return res.status(403).json({ message: "This account has been deactivated." });
        }

        // 3. Compare Password
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // 4. Generate JWT Token
        const token = jwt.sign(
            { id: user.id, role: user.role, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                fullName: user.full_name,
                role: user.role,
                status: user.status
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during login." });
    }
};

// 1. Send Reset Email
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            // Security Tip: Don't reveal if email exists. Send same response.
            return res.status(200).json({ message: "If that email exists, a reset link has been sent." });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expires = new Date(Date.now() + 3600000); // 1 hour from now

        await pool.query(
            'UPDATE users SET reset_password_token = $1, reset_password_expires = $2 WHERE email = $3',
            [token, expires, email]
        );

        // Configure Nodemailer (Use your .env variables)
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${token}`;

        await transporter.sendMail({
            to: email,
            subject: "FGCW 06 Portal - Password Reset",
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e6f0eb;">
                    <h2 style="color: #006837;">Password Reset Request</h2>
                    <p>You requested a password reset for your FGCW 06 Alumni account.</p>
                    <a href="${resetUrl}" style="background: #006837; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
                    <p style="margin-top: 20px; font-size: 12px; color: #666;">This link expires in 1 hour. If you didn't request this, please ignore this email.</p>
                </div>
            `
        });

        res.status(200).json({ message: "Reset link sent to email." });
    } catch (err) {
        res.status(500).json({ error: "Email delivery failed." });
    }
};

// 2. Process Reset
exports.resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const result = await pool.query(
            'SELECT id FROM users WHERE reset_password_token = $1 AND reset_password_expires > NOW()',
            [token]
        );

        if (result.rows.length === 0) {
            return res.status(400).json({ message: "Token is invalid or has expired." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await pool.query(
            'UPDATE users SET password_hash = $1, reset_password_token = NULL, reset_password_expires = NULL WHERE id = $2',
            [hashedPassword, result.rows[0].id]
        );

        res.status(200).json({ message: "Password updated successfully. You can now login." });
    } catch (err) {
        res.status(500).json({ error: "Reset failed." });
    }
};