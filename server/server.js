import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./product.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// get all products
app.get("/api/product", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// get single product
app.get("/api/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// add product
app.post("/api/product", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// delete product
app.delete("/api/product/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
