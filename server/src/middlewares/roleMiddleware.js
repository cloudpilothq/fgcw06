exports.isAdmin = (req, res, next) => {
    if (req.user && (req.user.role === 'ADMIN' || req.user.role === 'SUPERADMIN')) {
        next();
    } else {
        res.status(403).json({ error: "Access Denied: Administrative privileges required." });
    }
};