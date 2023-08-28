import BookingSchema from "../models/bookingmodel.js";

const addbooking=async(req,res)=>{
    try
    {
    const newbooking=new BookingSchema(req.body)
    await newbooking.save()
    res.status(200).json({success:true,data:"Booked Successfully"})
    }
    catch(error)
    {
        res.status(401).json({sucess:false,data:error.message})
    }

}

const viewbooking=async(req,res)=>{
    try
    {
    const bookings=await BookingSchema.find().populate("venuedata").populate("userdata")
    res.status(200).json({success:true,data:bookings})
    }
    catch(error)
    {
    res.status(401).json({sucess:false,data:error.message})
    }
}

export {addbooking,viewbooking}