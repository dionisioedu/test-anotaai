const Product = require('../models/Product');

module.exports = {
  async createProduct() {
    const product = await Product.create(request.body);
    return response.status(200).send(product)
  },
  async deleteProduct(id) {
    const deletedProduct = await Product.findByIdAndDelete({ id })
    return deletedProduct;
  },
  async updateProduct() {
    const updatedProduct = await Product.updateOne()
    return updatedProduct;
  },
  async listProducts() {
    const products = await Product.find();
    return products;
  }
}