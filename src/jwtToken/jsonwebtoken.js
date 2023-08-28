import jwt from "jsonwebtoken";

const createToken=(data)=>jwt.sign(data,"mysecreatkey")

export {createToken}