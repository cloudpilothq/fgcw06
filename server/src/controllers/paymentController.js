const axios = require('axios');
const pool = require('../config/db');


exports.initializePayment = async (req, res) => {
    const { amount, email } = req.body;
    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount: amount * 100, // Paystack uses Kobo
            callback_url: `${process.env.FRONTEND_URL}/donate/success`
        }, {
            headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Payment initialization failed" });
    }
};

exports.verifyPayment = async (req, res) => {
    const { reference, userId } = req.body;

    try {
        // 1. Call Paystack API to verify reference
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            }
        );

        const data = response.data.data;

        if (data.status === 'success') {
            // 2. Start Database Transaction
            const client = await pool.connect();
            try {
                await client.query('BEGIN');
                
                // Record the payment
                await client.query(
                    'INSERT INTO payments (user_id, reference, amount, status, paid_at) VALUES ($1, $2, $3, $4, $5)',
                    [userId, reference, data.amount / 100, 'success', data.paid_at]
                );

                // Update user financial status
                await client.query(
                    'UPDATE users SET is_financial = TRUE WHERE id = $1',
                    [userId]
                );

                await client.query('COMMIT');
                res.status(200).json({ status: "success", message: "Account updated" });
            } catch (e) {
                await client.query('ROLLBACK');
                throw e;
            } finally {
                client.release();
            }
        } else {
            res.status(400).json({ status: "failed", message: "Payment not verified" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server verification error" });
    }
};
