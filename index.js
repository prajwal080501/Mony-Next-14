import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./routes/UserRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/api", userRouter);
app.use("/api", transactionRouter);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log("Error connecting to database", error);
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on pddort ${process.env.PORT}`);
})




