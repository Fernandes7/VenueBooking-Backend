import BookingSchema from "../models/bookingmodel.js";

const addbooking=async(req,res)=>{
    try
    {
    const isExistbookingstart=await BookingSchema.findOne({venuedata:req.body.venuedata,startdateandtime:{$lte:req.body.startdateandtime},enddateandtime:{$gte:req.body.startdateandtime}})
    if(isExistbookingstart)
    res.status(400).json({success:false,data:"Already have a Booking",startdate:isExistbookingstart.startdateandtime,enddate:isExistbookingstart.enddateandtime})
    else
    {
        const isExistbookingend=await BookingSchema.findOne({venuedata:req.body.venuedata,startdateandtime:{$lte:req.body.enddateandtime},enddateandtime:{$gte:req.body.enddateandtime}})
        if(isExistbookingend)
        res.status(400).json({success:false,data:"Already have a Booking",startdate:isExistbookingend.startdateandtime,enddate:isExistbookingend.enddateandtime})
        else
        {
        const isExistbookingbetween=await BookingSchema.findOne({venuedata:req.body.venuedata,startdateandtime:{$gte:req.body.startdateandtime},enddateandtime:{$lte:req.body.enddateandtime}})
        if(isExistbookingbetween)
        res.status(400).json({success:false,data:"Already have a Booking",startdate:isExistbookingbetween.startdateandtime,enddate:isExistbookingbetween.enddateandtime})
        else
        {
            const newbooking=new BookingSchema(req.body)
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
    const bookings=await BookingSchema.find().populate("venuedata").populate("userdata")
    res.status(200).json({success:true,data:bookings})
    }
    catch(error)
    {
    res.status(401).json({sucess:false,data:error.message})
    }
}

export {addbooking,viewbooking}