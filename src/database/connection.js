const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports = connection;