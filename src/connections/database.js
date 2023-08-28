import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Ferno:123@cluster0.wqriud4.mongodb.net/VenuBookingChrist");
const conn = mongoose.connection;
conn.on("error", (err) =>
  console.log(`error in connnection to database ${err}`)
);
conn.once("open", () => console.log("connection to Database successful"));
export { conn };
