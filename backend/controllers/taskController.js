
const db = require("../config/db")

async function getTask(req, res) {
    try {
        const userId = req.user.userId;
        const [rows] = await db.query("SELECT * FROM Todo",[userId]);
        
        res.json(rows);

    } catch (err) {
        res.status(500).json(err);




    }

}
async function removeTask(req, res) {
    try {
        const { id } = req.params;
        console.log("PARAMS:", req.params);
        if (!id) {
            return res.status(400).json({
                message: "id is missing in URL"
            });
        }
        const sql = "DELETE FROM Todo WHERE task_id=?";
        const [result] = await db.query(sql, [id]);
        console.log("DELETE RESULT :", result);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "id not found"

            })
        }
        res.status(200).json({
            message: "The task has been deleted successfully!"
        });
    } catch (err) {
        console.log("ERROR:", err);
        res.status(500).json({
            message: "Database error",
            error: err.message
        });

    }

}

async function createTask(req, res) {
    try {
        const { title, user_id } = req.body;
        if (!title || !user_id) {
            return res.status(400).json({
                message: "All fields are required."
            })
        }
        const sql = "INSERT INTO Todo(title,user_id) VALUES (?,?)";
        const [result] = await db.query(sql, [title, user_id]);
        res.status(201).json({
            message: "Task created successfully",
            id: result.insertId
        });

    } catch (err) {
        res.status(500).json(err);

    }
}
module.exports = {
    getTask,
    removeTask,
    createTask,

}
