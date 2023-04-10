
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://minhbui:"+ process.env.secret + "@node-express.bxsdy56.mongodb.net/clothing?retryWrites=true&w=majority";
console.log(uri)
mongoose.connect(uri)
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// import routes
const router = require('./routes/products');
app.use('/products', router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
