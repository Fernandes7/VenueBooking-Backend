import BookingSchema from "../models/bookingmodel.js";

const addbooking=async(req,res)=>{
    try
    {
    const isExistbookingstart=await BookingSchema.findOne({venuedata:req.body.data.venuedata,startdateandtime:{$lte:req.body.data.startdateandtime},enddateandtime:{$gte:req.body.data.startdateandtime}})
    if(isExistbookingstart)
    res.status(200).json({success:false,data:"Already have a Booking",data:isExistbookingstart})
    else
    {
        const isExistbookingend=await BookingSchema.findOne({venuedata:req.body.data.venuedata,startdateandtime:{$lte:req.body.data.enddateandtime},enddateandtime:{$gte:req.body.data.enddateandtime}})
        if(isExistbookingend)
        res.status(200).json({success:false,data:"Already have a Booking",data:isExistbookingend})
        else
        {
        const isExistbookingbetween=await BookingSchema.findOne({venuedata:req.body.data.venuedata,startdateandtime:{$gte:req.body.data.startdateandtime},enddateandtime:{$lte:req.body.data.enddateandtime}})
        if(isExistbookingbetween)
        res.status(200).json({success:false,data:"Already have a Booking",data:isExistbookingbetween})
        else
        {
            const newbooking=new BookingSchema(req.body.data)
            await newbooking.save()
            res.status(200).json({success:true,data:newbooking})
        }
        }
    }
    }
    catch(error)
    {
        res.status(401).json({sucess:false,data:error.message})
    }

}

const viewbooking=async(req,res)=>{
    try
    {
    const bookings=await BookingSchema.find({venuedata:req.body.venuedata}).populate("venuedata").populate("userdata")
    res.status(200).json({success:true,data:bookings})
    }
    catch(error)
    {
    res.status(200).json({sucess:false,data:error.message})
    }
}

const viewbookingbyuserid=async(req,res)=>{
    try
    {
    const bookings=await BookingSchema.find({userdata:req.body.userdata}).populate("venuedata").populate("userdata")
    res.status(200).json({success:true,data:bookings})
    }
    catch(error)
    {
    res.status(200).json({sucess:false,data:error.message})
    }
}

const deletebookingbyuserid=async(req,res)=>{
    try{
        const dele=await BookingSchema.findByIdAndDelete({_id:req.body._id})
        res.status(200).json({success:true,data:"Successfully Deleted"})
    }
    catch(error)
    {
        res.status(200).json({success:false,message:error.message})
    }
}



export {addbooking,viewbooking,viewbookingbyuserid,deletebookingbyuserid}