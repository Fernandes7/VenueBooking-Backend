import express from "express"
import { addbooking, viewbooking } from "../controller/bookingcontroller.js"

const router=express.Router()

router.post("/booking",addbooking)
router.post("/viewbooking",viewbooking)

export default router