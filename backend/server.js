import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
    connectMongoDB();
});
