// e-commerce inventory management system
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/order.js";
import connectDB from "./config/db.js";
import returnOrder from "./utility/return_order.js";


dotenv.config();


const app = express();

connectDB();

// time limit
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: " e-commerce inventory management system is live" });
});

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});