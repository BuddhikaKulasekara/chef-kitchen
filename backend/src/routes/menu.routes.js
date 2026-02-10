const express = require("express")
const router = express.Router()


// ✅ GET all menu items
router.get("/", (req, res) => {
    req.db.query("SELECT * FROM menu_items", (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: "Database error" })
        }
        res.json(results)
    })
})

// ✅ POST add menu item (CREATE)
router.post("/", (req, res) => {
    const { name, description, price } = req.body

    req.db.query(
        "INSERT INTO menu_items (name, description, price) VALUES (?,?,?)",
        [name, description, price],
        (err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: "Insert failed" })
            }
            res.json({ success: true, id: result.insertId })
        }
    )
})

// ✅ PUT update menu item (UPDATE)
router.put("/:id", (req, res) => {
    const { id } = req.params
    const { name, description, price } = req.body

    req.db.query(
        "UPDATE menu_items SET name=?, description=?, price=? WHERE id=?",
        [name, description, price, id],
        (err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: "Update failed" })
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Menu item not found" })
            }

            res.json({ success: true })
        }
    )
})

// ✅ DELETE menu item (DELETE)
router.delete("/:id", (req, res) => {
    const { id } = req.params

    req.db.query(
        "DELETE FROM menu_items WHERE id=?",
        [id],
        (err, result) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: "Delete failed" })
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Menu item not found" })
            }

            res.json({ success: true })
        }
    )
})

module.exports = router
