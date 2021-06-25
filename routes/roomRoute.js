const express = require("express")
const { Rooms } = require("../models")

const router = express.Router()

router.get("/", async (req, res) => {
  const listOfRooms = await Rooms.findAll()
  res.json(listOfRooms)
})

router.get("/:id", async (req, res) => {
  const id = req.params.id
  const room = await Rooms.findByPk(id)
  res.json(room)
})

router.post("/", async (req, res) => {
  const room = req.body
  await Rooms.create(room)
  res.json(room)
})

module.exports = router
