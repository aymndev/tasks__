

const { connection: db } = require("../config/db")
require("dotenv").config();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");


async function register(req, res) {
    try {
        const { username, email, password } = req.body

        const [rows] = await db.query("SELECT * FROM User WHERE email=?", [email])
        if (rows.length > 0) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        const sql = "INSERT INTO User (username,email,password) VALUES (?, ?, ?)";
        const hashedpassword = await bcrypt.hash(password, 10)
        const [result] = await db.query(sql, [username, email, hashedpassword]);

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
        console.log("✅ Login controller reached");
        const { email, password } = req.body;







        const sql = "SELECT * FROM User WHERE email=?";



        const [rows] = await db.query(sql, [email])

        if (rows.length === 0) {
            return res.status(404).json({
                message: "The user not found"
            })

        }
        const user = rows[0];

        console.log("User from DB:", user);
        console.log("Password entered:", password);
        console.log("Password from DB:", user.password);

        const isMatch = await bcrypt.compare(password, user.password);

        console.log("isMatch:", isMatch);





        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password"
            });

        }
        if (user.status !== 'accepted') {
            return res.status(403).json({
                message: "your account  has not been approved yet. "
            })

        }

        const token = jwt.sign(
            {
                id: user.user_id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )


        return res.status(200).json({
            message: "The user is found seccessfully !",
            token,
            user: {
                id: user.user_id,
                username: user.username,
                email: user.email,
                role: user.role
            }



        })



    } catch (err) {
        return res.status(500).json({
            message: "Somme think wrong this time ",
            error: err

        })

    }



}
async function getUser(req, res) {
    try {
        const sql = "SELECT * FROM User"
        const [rows] = await db.query(sql);
        if (rows.length === 0) {
            res.status(404).json({
                message: "the user not found"
            })
        }
        return res.status(200).json(rows);
    }
    catch (err) {
        return res.status(500).json({
            message: "somthing wrong",
            error: err.message

        })

    }



}
module.exports = {
    register,
    login,
    getUser
}