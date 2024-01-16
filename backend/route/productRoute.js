const express = require("express");
const {getAllProducts} = require("../controller/productController.js")
const router = express.Router();

router.route(/getAllProducts)
module.exports= router