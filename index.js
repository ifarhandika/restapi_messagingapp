const express = require("express")

const app = express()
const PORT = 5000

const db = require("./models")

const userRoutes = require("./routes/userRoute")
const roomRoutes = require("./routes/roomRoute")
const messageRoutes = require("./routes/messageRoute")

app.use(express.json())

app.use("/users", userRoutes)
app.use("/rooms", roomRoutes)
app.use("/messages", messageRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to chatapp restapi")
})

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
  })
})
