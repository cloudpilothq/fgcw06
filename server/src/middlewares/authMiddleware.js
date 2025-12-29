const jwt = require('jsonwebtoken');

exports.protect = async (req, res, next) => {
    let token;

    // Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized to access this route." });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach user info to the request object for use in controllers
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token is invalid or expired." });
    }
};