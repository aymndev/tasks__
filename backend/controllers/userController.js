
const db = require("../config/db");

async function getUser(req, res) {
    try {
        const [rows] = await db.query("SELECT * FROM User");
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;

        const sql = "INSERT INTO User (name, email, password) VALUES (?, ?, ?)";

        const [result] = await db.query(sql, [name, email, password]);

        res.json({
            message: "User created successfully",
            id: result.insertId
        });

    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getUser,
    createUser
};