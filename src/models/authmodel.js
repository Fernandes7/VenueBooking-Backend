import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
{
 username:String,
 useremail:String,
 userpassword:String,
 usermobileno:String,
 usersecurityquestion:String,
 usersecurityquestionans:String,
 userdateofbirth:String
},
{
    timestamps:true
}
)

const UserSchema=mongoose.model("user",userSchema)
export default UserSchema