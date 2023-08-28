import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema(
    {
        userdata:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
        venuedata:{type:mongoose.Schema.Types.ObjectId,ref:"venue"},
        startdateandtime:Date,
        enddateandtime:Date,
    }
)

const BookingSchema=mongoose.model("booking",bookingSchema)
export default BookingSchema