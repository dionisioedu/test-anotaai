// const authConfig = require('../config/auth');
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400
  })
}
module.exports = {
  async createUser(request, response) {
    let { email, password } = request.body
    try {
      if (await User.findOne({ email })) {
        return response.status(400).send({ error: "Usuário já registrado" })
      }
      const user = await new User({
        email,
        password,
        createdAt: new Date(),
      });
      const newUser = await User.create(user)
      user.password = undefined;
      return response.send({
        newUser,
        token: generateToken({ id: user.id })
      })

    }
    catch (err) {
      console.error(err)
    }
  },
  async findUsers(request, response) {
    const user = await User.find().then(user => {
      response.send(user)
    })
  },
  async updateUser(request, response) {
    const updatedUser = await User.updateOne()
    response.send(updatedUser)

  },
  async deleteUser(request, response) {
    const deletedUser = await User.findOneAndDelete();
    response.status(200).send(deletedUser);
  },
  async authenticate(request, response) {
    const { email, password } = request.body

    const findUser = await User.findOne({ email }).select('+password')

    if (!user) {
      return response.status(400).send({ error: "User not found" })
    }
    if (!await bcrypt.compare(password, user.password))
      return response.status(400).send({ error: "Password is incorrect" })
    const user = await new User({
      email,
      password,
      createdAt: new Date(),
    });
    user.password = undefined

    const token =
      response.send({ user, token: generateToken({ id: user.id }) })
  }
}


