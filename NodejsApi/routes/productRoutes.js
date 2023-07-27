const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const Product = require("../models/productModels");
const domain = "http://localhost:5000/";
const uploadServices = require("../services/uploadsServices");
const auth = require("../auth/auth");

// router for product addition
router.post(
  "/product/add",
  uploadServices.productImage.single("image"),
  auth.verifyUser,
  async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      if (!file || file.length === 0) {
        res.status(400).json({ msg: "Please upload image", success: false });
        return;
      } else {
        const image = domain + "public/productUploads/" + file.filename;
        const product = await Product.create({
          name: data.name,
          price: data.price,
          quantity: data.quantity,
          category: data.category,
          description: data.description,
          image: image,
        });
        res
          .status(201)
          .json({ msg: "Product added successfully", success: true, product });
      }
    } catch (e) {
      res.status(500).json({ msg: e, success: false });
    }
  }
);

// get all products
router.get("/getProduct", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ msg: "All products", success: true, product });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

// get single product using params
router.get("/getProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json({ msg: "Single product", success: true, product });
  } catch (e) {
    res.status(500).json({ msg: e, success: false });
  }
});

// update product
router.put(
  "/updateProduct/:id",
  uploadServices.productImage.single("image"),
  auth.verifyUser,
  async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const file = req.file;
      if (!file || file.length === 0) {
        const product = await Product.findByIdAndUpdate(
          id,
          {
            name: data.name,
            sold: data.sold,
            price: data.price,
            quantity: data.quantity,
            category: data.category,
            description: data.description,
          },
          { new: true }
        );
        res
          .status(400)
          .json({ msg: "data updated successfully", success: true, product });
        return;
      } else {
        const image = domain + "public/productUploads/" + file.filename;
        const product = await Product.findByIdAndUpdate(
          id,
          {
            name: data.name,
            sold: data.sold,
            price: data.price,
            quantity: data.quantity,
            category: data.category,
            description: data.description,
            image: image,
          },
          { new: true }
        );
        res.status(201).json({
          msg: "Product updated successfully",
          success: true,
          product,
        });
      }
    } catch (e) {
      res.status(500).json({ msg: e, success: false });
    }
  }
);

module.exports = router;
