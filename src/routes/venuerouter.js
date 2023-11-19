import express from "express"
import { addvenue, getallvenue } from "../controller/venuecontroller.js"
import { upload } from "../connections/multer.js"

const router=express.Router()

router.post("/addvenue",upload.single("image"),addvenue)
router.get("/getallvenue",getallvenue)
router.get("/ping",(req,res)=>{
    res.send("pong")
}
)

export default router



