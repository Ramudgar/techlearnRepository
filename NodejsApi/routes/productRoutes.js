const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const Product = require("../models/productModels");
const domain = "http://localhost:3000/";
const uploadServices = require("../services/uploadsServices");
const re = new RegExp("\\s+", "g");

function eliminateWhitespace(imageName) {
  return imageName.replace(re, "");
}

// router for product addition
router.post(
  "/product/add",
  uploadServices.productImage.single("image"),
  async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      if (!file || file.length === 0) {
        res.status(400).json({ msg: "Please upload image", success: false });
        return;
      } else {
        // const newImageName = eliminateWhitespace(file.filename);

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

module.exports = router;
