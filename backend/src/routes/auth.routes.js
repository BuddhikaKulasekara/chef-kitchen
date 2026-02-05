const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

router.post("/login", (req, res) => {
    const { email, password } = req.body

    const sql = "SELECT * FROM admins WHERE email = ? AND password = ?"

    req.db.query(sql, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error" })
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign(
            { id: result[0].id, email: result[0].email },
            "secret123",
            { expiresIn: "1d" }
        )

        res.json({ token })
    })
})

module.exports = router
