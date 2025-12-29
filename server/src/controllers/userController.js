const pool = require('../config/db');

// Get current user's profile
exports.getMe = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT u.email, p.* FROM users u 
             JOIN profiles p ON u.id = p.user_id 
             WHERE u.id = $1`, 
            [req.user.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch profile" });
    }
};

// Update profile
exports.updateProfile = async (req, res) => {
    const { full_name, profession, house, bio, phone_number, linkedin_url } = req.body;
    const userId = req.user.id;

    try {
        await pool.query(
            `UPDATE profiles 
             SET full_name = $1, profession = $2, house = $3, bio = $4, 
                 phone_number = $5, linkedin_url = $6
             WHERE user_id = $5`,
            [full_name, profession, house, bio, phone_number, linkedin_url, userId]
        );
        res.json({ message: "Profile updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Update failed" });
    }
};