const express = require('express')
const app = express();
const logger = require('morgan')
const UserRoutes = require('../src/routes/UserRoutes')
const ProductRoutes = require('../src/routes/ProductRoutes')
const database = require('../src/database/connection')

require('dotenv').config()
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use('/user', UserRoutes);
app.use('/products', ProductRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is up and running")
})