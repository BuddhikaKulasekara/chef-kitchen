const express = require("express")
const cors = require("cors")
require("dotenv").config()

const db = require("./config/db")

const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

app.use((req, res, next) => {
    req.db = db
    next()
})

app.use("/api/menu", require("./routes/menu.routes"))
app.use("/api/auth", require("./routes/auth.routes"))


app.get("/", (req, res) => {
    res.send("Restaurant Backend Running 🚀")
})

const port = Number(process.env.PORT) || 5000

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

