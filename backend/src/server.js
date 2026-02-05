const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
require("dotenv").config()

const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurant_db"
})

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL connection failed:", err.message)
    } else {
        console.log("✅ Connected to MySQL")
    }
})

app.use((req, res, next) => {
    req.db = db
    next()
})

app.use("/api/menu", require("./routes/menu.routes"))
app.use("/api/auth", require("./routes/auth.routes"))


app.get("/", (req, res) => {
    res.send("Restaurant Backend Running 🚀")
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})
