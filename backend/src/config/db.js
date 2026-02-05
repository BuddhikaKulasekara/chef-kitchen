const mysql = require("mysql2")   // ✅ THIS WAS MISSING
require("dotenv").config()

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

module.exports = db
