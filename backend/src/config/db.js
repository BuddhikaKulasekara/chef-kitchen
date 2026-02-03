const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "restaurant_db"
});

module.exports = db;
