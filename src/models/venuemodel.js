import mongoose from "mongoose";

const venueSchema= new mongoose.Schema({
    name:String,
    block:String,
    capacity:String,
    image:String
})

const VenueSchema=mongoose.model("venue",venueSchema)
export default VenueSchema