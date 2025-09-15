const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

let users = []

app.post("/register", (req, res) => {
  const { username, password } = req.body
  const existingUser = users.find(u => u.username === username)
  if (existingUser) {
    return res.json({ success: false, message: "User already exists" })
  }
  users.push({ username, password })
  res.json({ success: true })
})

app.post("/login", (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username && u.password === password)
  if (user) {
    res.json({ success: true })
  } else {
    res.json({ success: false })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
})
