const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: Number,
    gender: String,
    masterCategory: String,
    subCategory: String,
    articleType: String,
    baseColour: String,
    season: String,
    year: Number,
    usage: String,
    productDisplayName: String,
    filename: String,
    link: String,
    price: Number,
    stock: Number
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product