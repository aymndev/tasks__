const express=require('express');
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello !!")
});

app.use("/user", require("./routes/userRoutes"));
app.use("/task", require("./routes/todoRoutes"));


app.listen(3000, () =>{
    console.log("the server works!")

});