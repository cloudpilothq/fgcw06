const pool = require('../config/db');

exports.getEvents = async (req, res) => {
    const userId = req.user.id;
    try {
        const query = `
            SELECT e.*, 
            (SELECT COUNT(*) FROM event_rsvps WHERE event_id = e.id) as attendee_count,
            EXISTS(SELECT 1 FROM event_rsvps WHERE event_id = e.id AND user_id = $1) as has_rsvp
            FROM events e
            ORDER BY e.event_date ASC
        `;
        const result = await pool.query(query, [userId]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch events" });
    }
};

exports.toggleRSVP = async (req, res) => {
    const { eventId } = req.params;
    const userId = req.user.id;
    const method = req.method;

    try {
        if (method === 'POST') {
            await pool.query(
                'INSERT INTO event_rsvps (event_id, user_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
                [eventId, userId]
            );
            return res.status(201).json({ message: "RSVP Confirmed" });
        } else if (method === 'DELETE') {
            await pool.query(
                'DELETE FROM event_rsvps WHERE event_id = $1 AND user_id = $2',
                [eventId, userId]
            );
            return res.status(200).json({ message: "RSVP Removed" });
        }
    } catch (err) {
        res.status(500).json({ error: "RSVP operation failed" });
    }
};