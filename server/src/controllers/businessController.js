const pool = require('../config/db');

exports.getAllBusinesses = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM businesses ORDER BY company_name ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load directory" });
    }
};

exports.addBusiness = async (req, res) => {
    const { company_name, industry, description, website_url, location } = req.body;
    const owner_id = req.user.id; // From JWT middleware

    try {
        await pool.query(
            'INSERT INTO businesses (owner_id, company_name, industry, description, website_url, location) VALUES ($1, $2, $3, $4, $5, $6)',
            [owner_id, company_name, industry, description, website_url, location]
        );
        res.status(201).json({ message: "Business listed successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to add business" });
    }
};