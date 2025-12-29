const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/directory', verifyToken, async (req, res) => {
    try {
        // Only return members who are APPROVED by admins
        const result = await pool.query(`
            SELECT 
                u.id as user_id, 
                p.full_name, 
                p.house, 
                p.profession, 
                p.profile_pic_url 
            FROM users u
            JOIN profiles p ON u.id = p.user_id
            WHERE u.status = 'APPROVED'
            ORDER BY p.full_name ASC
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;