import { createToken } from "../jwtToken/jsonwebtoken.js";
import UserSchema from "../models/authmodel.js";
import bcrypt from "bcrypt"

const signup=async(req,res)=>{
    const isEXist=await UserSchema.findOne({useremail:req.body.data.useremail})
    if (isEXist)
    return res.status(200).json({success:false,message:"User Already Exist with this Email"})
    else
    {
        const salt=await bcrypt.genSalt()
        const hashedpassword=await bcrypt.hash(req.body.data.userpassword,salt)
        const newuserdata=new UserSchema({
            useremail:req.body.data.useremail,
            username:req.body.data.username,
            userpassword:hashedpassword,
            userdateofbirth:req.body.data.userdateofbirth,
            usersecurityquestion:req.body.data.usersecurityquestion,
            usersecurityquestionans:req.body.data.usersecurityquestionans,
            isAdmin:false
        })
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
        const isExist=await UserSchema.findOne({useremail:req.body.data.useremail})
        if(isExist)
        {
            const ispasswordcorrect=await bcrypt.compare(req.body.data.userpassword, isExist.userpassword)
            if(ispasswordcorrect)
            {
                const data={userdata:isExist}
                const accesstoken=createToken(data)
                res.status(200).json({success:true,user:isExist,token:accesstoken})
            }
            else
            res.status(200).json({success:false,data:"Invalid Password"})
        }
        else
        res.status(200).json({success:false,data:"UserEmail is Not Exist"})
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