const router = require('express').Router();
let Product = require('../models/product.model');
router.route('/').get((req, res) => {
    Product.find()
        .limit(1000)
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
  });

module.exports = router