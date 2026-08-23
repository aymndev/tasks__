

const db = require("../config/db");

async function getUser(req, res) {
    try {
        const [rows] = await db.query("SELECT * FROM User");
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
}



async function removeUser(req, res) {
    try {
        const { user_id } = req.params;
        console.log("PARAMS RECEIVED:", req.params);
        if (!user_id) {
            return res.status(400).json({
                message: "user_id is missing in URL"
            });
        }
        const sql = "DELETE FROM User WHERE user_id = ?";

        const [result] = await db.query(sql, [user_id]);
        console.log("DELETE RESULT:", result);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).send({ message: "the user has been deleted successfully !" })


    } catch (err) {
        console.log("ERROR:", err);
        res.status(500).json({
            message: "Database error",
            error: err.message
        });

    }

}


async function createUser(req, res) {
    try {
    
        const { username, email, password } = req.body;
        if(!username || !email || ! password){
            return res.status(400).json({
                message:"All fields are required."
            })
        }
        const [existingUsre]=await db.query("SELECT * FROM User WHERE email=?",[email]);
        if (existingUsre.length>0){
            return res.status(409).json({
                message:"Email already exists"
            })

        }
        const hashpassword=await bcrypt.hash(password,10);
        
        const sql = "INSERT INTO User (username, email, password) VALUES (?, ?, ?)";

        const [result] = await db.query(sql, [username, email, hashpassword]);

        res.status(201).json({
            message: "User created successfully",
            id: result.insertId
        });

    } catch (err) {
        console.error("CREATE USER ERROR:", err);
        res.status(500).json(err);
        
    }
}

module.exports = {

    getUser,
    createUser,
    removeUser
};