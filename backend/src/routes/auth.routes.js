const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router()

router.post("/login", (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Missing fields" })
    }

    // 🔍 Check admin by email
    req.db.query(
        "SELECT * FROM admins WHERE email = ?",
        [email],
        async (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: "Database error" })
            }

            if (results.length === 0) {
                return res.status(401).json({ message: "Invalid credentials" })
            }

            const admin = results[0]

            // 🔐 Compare password
            const isMatch = await bcrypt.compare(password, admin.password)

            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" })
            }

            // ✅ Login success
            res.json({
                token: "admin-token-123",
                admin: {
                    id: admin.id,
                    email: admin.email
                }
            })
        }
    )
})

module.exports = router
