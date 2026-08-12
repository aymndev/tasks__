
const { connection } = require("../config/db")

async function getTask(req, res) {
    try {
        const userId = req.user.id;

        const [rows] = await connection.query(
            "SELECT * FROM Task WHERE user_id = ?",
            [userId]
        );

        res.json(rows);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: err.message
        });
    }
}
async function  searchTask(req,res){
    try{
        const { q } = req.query;
        const sql ="SELECT * FROM Task WHERE title like ?";

        const [rows]=await connection.query(sql,[`%${q}%`]);
        res.json(rows);


    }catch(err){
        res.status(500).json({
            error: err.message
        });

    }
}
async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const sql = "UPDATE  Task SET completed= TRUE WHERE task_id= ? ";

        await connection.query(sql, [id]);
        res.json({
            message: "The task updated successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });

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
        const sql = "DELETE FROM Task WHERE task_id=?";
        const [result] = await connection.query(sql, [id]);
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
        const { title, category } = req.body;
        const userId =req.user.id;
        console.log("BODY:",req.body);
        console.log("USER ID"),userId
        if (!title || !category) {
            return res.status(400).json({
                message: "All fields are required."
            })
        }
        const sql = "INSERT INTO Task(title,user_id,category) VALUES (?,?,?)";
        const [result] = await connection.query(sql, [title,userId, category]);
        res.status(201).json({
            message: "Task created successfully",
            id: result.insertId,
            title,
            user_id: userId,
            category
        });

    } catch (err) {
        console.error("CREATE TASK ERROR:", err);
        res.status(500).json({
            error:err.message
        });



    }
}
module.exports = {
    getTask,
    removeTask,
    createTask,
    updateTask,
    searchTask
};