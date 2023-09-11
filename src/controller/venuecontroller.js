import VenueSchema from "../models/venuemodel.js";
import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()
cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.CLOUDAPIKEY, 
    api_secret: process.env.CLOUDAPISECREAT
  });

const addvenue=async(req,res)=>{
try
{
const tempFilePath = 'temp_image.jpg';
fs.writeFileSync(tempFilePath, req.file.buffer);
const result = await cloudinary.uploader.upload(tempFilePath,{ resource_type: 'auto' });
fs.unlinkSync(tempFilePath);
const newvenuedata=new VenueSchema({...req.body,image:result.secure_url})
await newvenuedata.save()
res.json({success:true ,data:result.secure_url}).status(200)
}
catch(error)
{
    res.status(200).json({success:false,message:error.message})
}
    
}


const getallvenue=async(req,res)=>{
try
{
const allvenue=await VenueSchema.find()
res.status(200).json({success:true,data:allvenue})
}
catch(error)
{
    res.status(200).json({success:false,message:error.message})
}
}

export {addvenue,getallvenue}