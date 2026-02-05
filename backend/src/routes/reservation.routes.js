const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    req.db.query("SELECT * FROM reservations ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json(err)
        res.json(results)
    })
})

router.put("/:id", (req, res) => {
    const { status } = req.body
    req.db.query(
        "UPDATE reservations SET status=? WHERE id=?",
        [status, req.params.id],
        () => res.json({ message: "Status updated" })
    )
})

module.exports = router
