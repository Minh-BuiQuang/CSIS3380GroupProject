import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const mongoose = require('mongoose')
const csvToJson = require('convert-csv-to-json')
require('dotenv').config();

mongoose.connect("mongodb+srv://minhbui:"+ process.env.secret + "@node-express.bxsdy56.mongodb.net/clothing?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to database")
})
.catch((err) => {
    console.log(err)
})

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
let products = new Array()
const json = csvToJson.fieldDelimiter(',').supportQuotedField(true).getJsonFromCsv("public/csv/clothing_data.csv")
json.forEach(p => {
    const product = new Product({
        id:p.id,
        gender:p.gender,
        masterCategory:p.masterCategory,
        subCategory:p.subCategory,
        articleType:p.articleType,
        baseColour:p.baseColour,
        season:p.season,
        year:p.year,
        usage:p.usage,
        productDisplayName:p.productDisplayName,
        filename:p.filename,
        link:p.link,
        price:p.price,
        stock:p.stock
    })
    products.push(product)
})

Product.insertMany(products)
.then(() => {console.log("inserted")})
.catch((err) => {console.log(err)})

