const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM admins WHERE email=?", [email], async (err, result) => {
        if (!result.length) return res.status(401).json({ message: "Invalid" });

        const match = await bcrypt.compare(password, result[0].password);
        if (!match) return res.status(401).json({ message: "Invalid" });

        const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET);
        res.json({ token });
    });
});

module.exports = router;
