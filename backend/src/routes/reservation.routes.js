import express from 'express'
import db from '../config/db.js'

const router = express.Router()

// 🔹 GET all reservations
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM reservations ORDER BY created_at DESC'
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err)
        res.json(results)
    })
})

// 🔹 ADD reservation (customer side)
router.post('/', (req, res) => {
    const { name, email, phone, date, time, guests } = req.body

    const sql =
        'INSERT INTO reservations (name,email,phone,date,time,guests) VALUES (?,?,?,?,?,?)'

    db.query(sql, [name, email, phone, date, time, guests], err => {
        if (err) return res.status(500).json(err)
        res.json({ message: 'Reservation added' })
    })
})

// 🔹 APPROVE reservation
router.put('/:id/approve', (req, res) => {
    const sql = 'UPDATE reservations SET status="approved" WHERE id=?'
    db.query(sql, [req.params.id], err => {
        if (err) return res.status(500).json(err)
        res.json({ message: 'Reservation approved' })
    })
})

// 🔹 DELETE reservation
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM reservations WHERE id=?'
    db.query(sql, [req.params.id], err => {
        if (err) return res.status(500).json(err)
        res.json({ message: 'Reservation deleted' })
    })
})

export default router
