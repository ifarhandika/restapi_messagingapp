const express = require("express")
const { Rooms, Users, Message } = require("../models")

const router = express.Router()

//GET all room conversation
router.get("/", async (req, res) => {
  try {
    const listOfRooms = await Rooms.findAll()
    res.json(listOfRooms)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

//GET list of conversation by roomId
router.get("/:roomId", async (req, res) => {
  const roomId = req.params.roomId
  try {
    const room = await Message.findAll({ where: { RoomId: roomId } })
    res.status(200).json(room)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

//POST a new room conversation
router.post("/", async (req, res) => {
  const { initiator, chatWith } = req.body
  try {
    const userInitiator = await Users.findOne({
      where: { username: initiator },
    })
    const userChatWith = await Users.findOne({
      where: { username: chatWith },
    })
    const newRoom = await Rooms.create({
      initiator: userInitiator.username,
      chatWith: userChatWith.username,
      userId: userInitiator.id,
    })
    res.json(newRoom)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

module.exports = router
