import express from 'express'
import db from '../config/db.js'

const router = express.Router()

// 🔹 ADD reservation (from your ContactForm)
router.post('/', (req, res) => {
    const {
        fullname,
        email,
        phnumber,
        outlet,
        time,
        people,
        Message,
    } = req.body

    const sql = `
    INSERT INTO reservations 
    (name, email, phone, date, time, guests, status)
    VALUES (?, ?, ?, CURDATE(), ?, ?, 'pending')
  `

    db.query(
        sql,
        [fullname, email, phnumber, time, people],
        (err) => {
            if (err) return res.status(500).json(err)
            res.json({ message: 'Reservation saved' })
        }
    )
})

// 🔹 GET all reservations (Admin)
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM reservations ORDER BY id DESC'
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err)
        res.json(results)
    })
})

// 🔹 APPROVE reservation
router.put('/:id/approve', (req, res) => {
    const sql = 'UPDATE reservations SET status="approved" WHERE id=?'
    db.query(sql, [req.params.id], (err) => {
        if (err) return res.status(500).json(err)
        res.json({ message: 'Reservation approved' })
    })
})

// 🔹 DELETE reservation
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM reservations WHERE id=?'
    db.query(sql, [req.params.id], (err) => {
        if (err) return res.status(500).json(err)
        res.json({ message: 'Reservation deleted' })
    })
})

export default router
