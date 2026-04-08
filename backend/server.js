import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

// Middleware
app.use(cors({origin:process.env.FRONTEND_URL, credentials:true}));
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(5000, () => {
  console.log(`Server running on port 5000`);
    connectDB();
});