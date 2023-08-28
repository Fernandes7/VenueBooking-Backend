import jwt from "jsonwebtoken";

const verifytoken=(req,res,next)=>{
    const authHeader=req.headers["authorization"]
    const token=authHeader && authHeader.split(" ")[1]
    if(!token)
    return res.status(401).json({success:false,data:"No Token to Verify"})
    else
    {
        try
        {
           const verifyoutput=jwt.verify(token,"mysecreatkey")
           req.user=verifyoutput
           next()
        }
        catch(error)
        {
            res.status(401).json({success:false,data:error.message})
        }
    }
}

export default verifytoken