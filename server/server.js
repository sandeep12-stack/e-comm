import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./product.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/shop_db")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ GET products
app.get("/api/product", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ✅ GET single product by id
app.get("/api/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});


// ✅ POST product  (THIS WAS MISSING AT RUNTIME)
app.post("/api/product", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});


// DELETE product by id
app.delete("/api/product/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});


// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
