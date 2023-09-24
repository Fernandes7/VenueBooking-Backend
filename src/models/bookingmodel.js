import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema(
    {
        userdata:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
        venuedata:{type:mongoose.Schema.Types.ObjectId,ref:"venue"},
        startdateandtime:String,
        enddateandtime:String,
        programname:String,
        personname:String,
        noofstudents:Number,
        phoneno:String,
        semdept:String,
        projector:Boolean,
        soundandmic:Boolean,
        connectionitem:Boolean,
        remarks:String
    }
)

const BookingSchema=mongoose.model("booking",bookingSchema)
export default BookingSchema