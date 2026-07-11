const { connection: db } = require("../config/db");
const bcrypt = require("bcrypt");

async function createUser({ username, email, password, role, status }) {

    //const { username, email, password, role, status } = req.body
    const [rows] = await db.query("SELECT * FROM User WHERE email=?", [email])
    if (rows.length > 0) {
        throw new Error("Email already exists");
    }

    const sql = "INSERT INTO User(username, email, password, role, status) VALUES (?, ?, ?, ?, ?)"
    const hash_password = await bcrypt.hash(password, 10);
    const [result] = await db.query(sql, [username, email, hash_password, role, status])
    return result.insertId;


}


module.exports = {
    createUser,
};
