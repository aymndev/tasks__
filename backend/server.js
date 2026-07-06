const express=require('express');
const app=express();
const {connectDB} =require("./config/db");
const authRoutes=require('./routes/authRoutes')
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello !!")
});

connectDB();

app.use("/user", require("./routes/userRoutes"));
app.use("/task", require("./routes/todoRoutes"));
app.use("/api/auth",authRoutes);
app.use("/admin",require("./routes/adminRouter"))



app.listen(3000, () =>{
    console.log("the server works!")

});