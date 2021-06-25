const express = require("express")
const { Message } = require("../models")

const router = express.Router()

router.get("/:roomId", async (req, res) => {
  const roomId = req.params.roomId
  try {
    const room = await Message.findAll({ where: { RoomId: roomId } })
    res.status(200).json(room)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.post("/:userId", async (req, res) => {
  const message = req.body
    const userId = req.params.userId
    
  try {
    const user = await Message.findOne({ where: { UserId: userId } })
    console.log(user)
    const sentMessage = await Message.create({
      message,
      userId: user.username,
    })

    res.status(200).json(sentMessage)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

module.exports = router
