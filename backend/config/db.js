

const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "task_management"
})
async function connectDB() {
    try {
        const conn = await connection.getConnection();
        console.log("✅ Database connected successfully!");
        conn.release();
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
    }
}
module.exports = { connection, connectDB };
