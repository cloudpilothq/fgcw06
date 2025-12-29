const pool = require('../config/db');

exports.getDashboardStats = async (req, res) => {
    try {
        const memberCount = await pool.query('SELECT COUNT(*) FROM users');
        const pendingCount = await pool.query("SELECT COUNT(*) FROM users WHERE status = 'PENDING'");
        const businessCount = await pool.query('SELECT COUNT(*) FROM businesses');
        const duesSum = await pool.query("SELECT SUM(amount) FROM payments WHERE status = 'SUCCESS'");

        res.json({
            totalMembers: parseInt(memberCount.rows[0].count),
            pendingApprovals: parseInt(pendingCount.rows[0].count),
            totalBusinesses: parseInt(businessCount.rows[0].count),
            totalDues: parseInt(duesSum.rows[0].sum || 0)
        });
    } catch (err) {
        res.status(500).json({ error: "Could not retrieve admin stats" });
    }
};