const { connection: db } = require("../config/db");
const { createUser } = require("../services/userService")
async function getPendingUsers(req, res) {
    try {
        const sql = "SELECT * FROM User WHERE status='pending'"
        const [rows] = await db.query(sql);
        if (rows.length === 0) {
            return res.status(404).json({
                message: "No pending users found."
            });
        }



        return res.status(200).json(rows);



    }
    catch (err) {
        return res.status(500).json({
            message: "Something went wrong.",
            error: err.message
        })
    }


}
async function acceptUser(req, res) {
    try {
        const { id } = req.params

        const sql = "UPDATE User SET status='accepted' WHERE user_id=?"
        const [result] = await db.query(sql, [id])
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "the user not fount"
            })
        }

        return res.status(201).json({
            message: "the user acceptes successfully "
        })

    } catch (err) {
        return res.status(500).json({
            message: "somthing went wrong ",
            error: err.message
        })
    }

}
async function rejectUser(req, res) {
    try {
        const { id } = req.params
        const sql = "DELETE FROM User WHERE user_id=?"
        const [result] = await db.query(sql, [id])
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "the user not fount"
            })
        }

        return res.status(200).json({
            message: "the user reject successfully "
        })

    } catch (err) {
        return res.status(500).json({
            message: "somthing went wrong ",
            error: err.message
        })
    }

}
async function deleteUser(req, res) {
    try {


        const { id } = req.params
        const sql = "DELETE FROM User WHERE user_id=?"
        const [result] = await db.query(sql, [id])
        return res.status(200).json({
            message: "User has been deleted successfuly"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Somthing went wrong!",
            error: err.message
        })

    }


}
async function getStatistics(req, res) {
    try {
        const [[totalUsers]] = await db.query(
            "SELECT COUNT(*) AS total FROM User "
        )
        const [[activeUsers]] = await db.query(
            "SELECT COUNT(*) AS total  FROM User WHERE status='accepted'"
        )
        const [[pandingUsers]] = await db.query(
            "SELECT COUNT(*) AS total FROM User WHERE status='pending'"

        )
        res.json({
            totalUsers: totalUsers.total,
            activeUsers: activeUsers.total,
            pandingUsers: pandingUsers.total,

        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }

}
async function addUser(req, res) {
    try {
        const { username, email, password, role } = req.body;
        const userId = await createUser({
            username,
            email,
            password,
            role,
            status: "accepted"
        })
        res.status(201).json({
            message: "User created successfully",
            userId,
        });
    } catch (err) {
        if (err.message === "Email already exists") {
            return res.status(409).json({
                message: err.message,
            });
        }

        res.status(500).json({
            message: "Something went wrong",
        });

    }

}

module.exports = {
    getPendingUsers,
    deleteUser,
    rejectUser,
    acceptUser,
    getStatistics,
    addUser

}