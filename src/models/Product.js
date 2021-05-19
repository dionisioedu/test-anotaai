const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String
  },
  price: {
    type: "long"
  },
  category: {
    type: String
  }
})
const Product = ('Product', ProductSchema)
module.exports = Product;