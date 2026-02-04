const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
require("dotenv").config()

const app = express()

// ✅ middleware
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

// ✅ MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",          // XAMPP default
    database: "chef_kitchen"
})

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL connection failed:", err.message)
    } else {
        console.log("✅ Connected to MySQL")
    }
})

// make db available in routes
app.use((req, res, next) => {
    req.db = db
    next()
})

// routes
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/menu", require("./routes/menu.routes"))

// test route
app.get("/", (req, res) => {
    res.send("Restaurant Backend Running 🚀")
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})
