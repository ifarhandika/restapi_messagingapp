const express = require("express")
const bcrypt = require("bcrypt")
const { Users } = require("../models")

const router = express.Router()

//GET All User
router.get("/", async (req, res) => {
  try {
    const userList = await Users.findAll({})
    res.status(200).json(userList)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

//POST new user
router.post("/", async (req, res) => {
  const { username, password } = req.body
  try {
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash,
      })
    })
    res.status(201).json(`${username} was created`)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

//POST login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await Users.findOne({ where: { username: username } })
    if (!user) res.status(404).json({ message: "User does not exist" })

    bcrypt.compare(password, user.password).then((equal) => {
      if (!equal)
        res
          .status(404)
          .json({ message: "Wrong Username and Password Combination" })
      res.status(201).json(`You logged in`)
    })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const delUser = await Users.destroy({
      where: { id: id },
    })
    await delUser
    res.json("Successfully deleted")
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
