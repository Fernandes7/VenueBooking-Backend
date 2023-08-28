import express from "express"
import { addvenue } from "../controller/venuecontroller.js"

const router=express.Router()

router.post("/addvenue",addvenue)

export default router



