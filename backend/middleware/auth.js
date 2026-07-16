

function auth(req,res,next){
    try{

    
    const token =req.headers.authorization
        console.log("Authorization:", req.headers.authorization);
    if(!token){
        return res.status(401).json({
            message:"ther is not token"
        })
    }
    const newToken = token.split(" ")[1];

    const decoded = jwt.verify(newToken, process.env.JWT_SECRET);
    

console.log("Decoded:", decoded);
    req.user=decoded


    next();
}catch(err){
    return res.status(401).json({
        message:"somthing wrong",
        error:err.message
    })
}

}
module.exports=auth