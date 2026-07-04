

const { connection: db } = require("../config/db")
const jwt =require('jsonwebtoken')

async function register(req, res) {
    try {
        const { username, email, password } = req.body

        const sql = "INSERT INTO User (username,email,password) VALUES (?, ?, ?)";
        const [result] = await db.query(sql, [username, email, password]);
        res.status(201).json({
            message: "User registered seccessfully !",
            userId: result.insertId
        })
    } catch (err) {
        return res.status(500).json({
            message: "somthing went wrong !",
            error: err

        })
    }
}

async function login(req, res) {
    try {



        const { email, password } = req.body;
        const sql = "SELECT * FROM User WHERE email=?";


        const [rows] = await db.query(sql, [email])
        if (rows.length === 0) {
            return res.status(404).json({
                message: "The user not found"
            })

        }
        const user = rows[0];
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email
            },
            "mySecretKey",
            {
                expiresIn:'1h'
            }
        )

        if (password !== user.password) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }
        return res.status(200).json({
            message: "The user is found seccessfully !",
            token
        


        })



    } catch (err) {
        return res.status(500).json({
            message: "Somme think wrong this time ",
            error: err

        })

    }



}
module.exports = {
    register,
    login
}