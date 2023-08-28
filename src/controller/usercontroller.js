import { createToken } from "../jwtToken/jsonwebtoken.js";
import UserSchema from "../models/authmodel.js";
import bcrypt from "bcrypt"

const signup=async(req,res)=>{
    const isEXist=await UserSchema.findOne({useremail:req.body.useremail})
    if (isEXist)
    return res.status(400).json({message:"User Already Exist with this Email"})
    else
    {
        const salt=await bcrypt.genSalt()
        const hashedpassword=await bcrypt.hash(req.body.userpassword,salt)
        const newuserdata=new UserSchema({useremail:req.body.useremail,username:req.body.username,userpassword:hashedpassword})
        try{
            await newuserdata.save()
            return res.status(200).json({success:true,data:"User Registred Successfully"})
        }
        catch(error)
        {
            res.status(404).json({success:false,data:error.message})
        }

    }

}

const login=async(req,res)=>{
    try{
        const isExist=await UserSchema.findOne({useremail:req.body.useremail})
        if(isExist)
        {
            const ispasswordcorrect=await bcrypt.compare(req.body.userpassword, isExist.userpassword)
            if(ispasswordcorrect)
            {
                const data={userdata:isExist}
                const accesstoken=createToken(data)
                res.status(200).json({success:true,username:isExist.username,token:accesstoken})
            }
        }
        else
        res.status(400).json({success:false,data:"UserEmail is Not Exist"})
    }
    catch(err)
    {
        return res.status(404).json({success:false,data:err.message})
    }
}

const verify=(req,res)=>{
    res.send({output:req.user})
}

export {signup,login,verify}