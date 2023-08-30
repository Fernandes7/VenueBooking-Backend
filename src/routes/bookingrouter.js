import express from "express"
import { addbooking, deletebookingbyuserid, viewbooking, viewbookingbyuserid } from "../controller/bookingcontroller.js"

const router=express.Router()

router.post("/booking",addbooking)
router.post("/viewbooking",viewbooking)
router.post("/viewbookingbyuserid",viewbookingbyuserid)
router.post("/deletebookingbyuserid",deletebookingbyuserid)

export default router