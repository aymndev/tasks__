const express=require('express');
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello !!")
});
app.get('/user',require("./routes/userRoutes"))
app.post('/user',require("./routes/userRoutes"))

app.listen(3000, () =>{
    console.log("the server works!")

});