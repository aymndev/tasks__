const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    try {
        console.log("Authorization:", req.headers.authorization);

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                message: "There is no token"
            });
        }

        const newToken = token.split(" ")[1];
        console.log("Token:", newToken);

        const decoded = jwt.verify(newToken, process.env.JWT_SECRET);
        console.log("Decoded:", decoded);

        req.user = decoded;

        next();
    } catch (err) {
        console.log("AUTH ERROR:", err.message);

        return res.status(401).json({
            message: "Something wrong",
            error: err.message
        });
    }
}

module.exports = auth;