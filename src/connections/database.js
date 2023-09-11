import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(process.env.DATABASEURL);
const conn = mongoose.connection;
conn.on("error", (err) =>
  console.log(`error in connnection to database ${err}`)
);
conn.once("open", () => console.log("connection to Database successful"));
export { conn };
