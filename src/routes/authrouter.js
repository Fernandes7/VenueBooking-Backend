import express from "express"
import { login, signup, verify } from "../controller/usercontroller.js"
import verifytoken from "../middlewares/authjsonwebtokenverify.js"

const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/verify",verifytoken,verify)

export default router