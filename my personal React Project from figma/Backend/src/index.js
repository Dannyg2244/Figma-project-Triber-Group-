import express from "express";
import logger from "morgan";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from "./routes/users.js"


dotenv.config();


const app = express();
const PORT = 3006;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connection Successfull");
  })
  .catch((err) => {
    console.error("Error connecting to Database:", err);
  });

app.use(express.json());
app.use(logger("dev"));
app.use('/users', userRoute)

// app.get("/", (req, res) => {
//   try {
//     res.status(200).json({ msg: "Project Triber Group" });
//   } catch (error) {
//     res.status(400).json({ msg: "Database not found" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
