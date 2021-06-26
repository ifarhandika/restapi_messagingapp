const express = require("express")
const { Message, Users, Rooms } = require("../models")

const router = express.Router()

//Post a new message to room conversation
router.post("/", async (req, res) => {
  const { message, sender, idRoom } = req.body

  try {
    const userSender = await Users.findOne({ where: { username: sender } })
    const roomId = await Rooms.findOne({ where: { id: idRoom } })
    const newMessage = await Message.create({
      message,
      sender: userSender.username,
      userId: userSender.id,
      roomId: roomId.id,
    })
    res.status(200).json(newMessage)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

module.exports = router
