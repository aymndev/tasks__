

function auth(req,res,next){
    try{

    
    const token =req.headers.authorization
    if(!token){
        return res.status(401).json({
            message:"ther is not token"
        })
    }
    const new_token=token.split(" ")[1];
    const token_=new_token[1];
    const decoded=jwt.verify(token_,process.env.JWT_SECRET)
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