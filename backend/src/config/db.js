const mysql = require("mysql2")
require("dotenv").config()

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME || "restaurant_db",
})

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL connection failed:", err.message)
        console.error(
            "   WAMP: start MySQL (green icon), then import restaurant_db.sql in phpMyAdmin if the database is missing."
        )
    } else {
        console.log("✅ Connected to MySQL (restaurant_db)")
    }
})

module.exports = db
