const Product  = require('../models/productService');
const jwt = require("jsonwebtoken")
const amqplib = require("amqplib")

const createProduct = async (req, res, next) => {


    const { name, description, price } = req.body;
    const newProduct = new Product({
            name,
            description,
            price
        });
        newProduct.save();
        return res.json(newProduct);
    }


const buyProduct = async (req, res, next) => {

    const { ids } = req.body;
    const products = await Product.find({ _id: { $in: ids } });
  
    channel.sendToQueue(
        "ORDER", 
        Buffer.from(
            JSON.stringify({
                products,
            })
        )
    )
}


module.exports = {
    createProduct
   }

