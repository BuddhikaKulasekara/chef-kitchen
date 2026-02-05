const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    req.db.query("SELECT * FROM messages ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json(err)
        res.json(results)
    })
})

router.delete("/:id", (req, res) => {
    req.db.query(
        "DELETE FROM messages WHERE id=?",
        [req.params.id],
        () => res.json({ message: "Message deleted" })
    )
})

module.exports = router
