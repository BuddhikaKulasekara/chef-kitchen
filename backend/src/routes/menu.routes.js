const express = require("express");
const db = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT * FROM menu_items", (err, data) => {
        res.json(data);
    });
});

router.post("/", auth, (req, res) => {
    const { name, description, price, image, category_id } = req.body;
    db.query(
        "INSERT INTO menu_items SET ?",
        { name, description, price, image, category_id },
        () => res.json({ message: "Menu added" })
    );
});

module.exports = router;
