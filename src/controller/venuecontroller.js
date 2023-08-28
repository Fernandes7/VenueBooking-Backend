import VenueSchema from "../models/venuemodel.js";

const addvenue=async(req,res)=>{
    try
    {
    const newvenue=new VenueSchema(req.body)
    await newvenue.save()
    res.status(200).json({success:true,data:"Venue added Successfully"})
    }
    catch(error)
    {
        res.status(400).json({success:false,data:error.message})
    }
    
}

export {addvenue}