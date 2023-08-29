import express from "express"
import { addvenue, getallvenue } from "../controller/venuecontroller.js"
import { upload } from "../connections/multer.js"

const router=express.Router()

router.post("/addvenue",upload.single("image"),addvenue)
router.get("/getallvenue",getallvenue)

export default router



