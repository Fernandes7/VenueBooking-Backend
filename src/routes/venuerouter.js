import express from "express"
import { addvenue } from "../controller/venuecontroller.js"
import { upload } from "../connections/multer.js"

const router=express.Router()

router.post("/addvenue",upload.single("image"),addvenue)

export default router



