const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    req.db.query("SELECT * FROM menu_items", (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: "Database error" })
        }

        res.json(results)   // ✅ returns array
    })
})


// ✅ POST add menu item
router.post("/", (req, res) => {
    const { name, description, price } = req.body

    req.db.query(
        "INSERT INTO menu_items (name, description, price) VALUES (?,?,?)",
        [name, description, price],
        (err) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: "Insert failed" })
            }

            res.json({ success: true })
        }
    )
})


module.exports = router
