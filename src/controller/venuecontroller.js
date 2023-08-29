import VenueSchema from "../models/venuemodel.js";
import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
    cloud_name: 'dnvq4niny', 
    api_key: '771215485756261', 
    api_secret: '2H9YL-EtkOLOSlMWnRuD0gsSM5k'
  });

const addvenue=async(req,res)=>{
try
{
const tempFilePath = 'temp_image.jpg';
fs.writeFileSync(tempFilePath, req.file.buffer);
const result = await cloudinary.uploader.upload(tempFilePath,{ resource_type: 'auto' });
res.json({success:true ,data:result.secure_url}).status(200)
fs.unlinkSync(tempFilePath);
}
catch(error)
{
    res.status(200).json({success:false,message:error.message})
}
    
}

export {addvenue}