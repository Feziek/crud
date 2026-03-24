import express from "express"

import { pool } from "../lib/db.js"

import { network } from "../utils/constants.js"

const BookRoute = express.Router()

BookRoute.get("/", (req, res) => {
    const q = "SELECT * FROM books"
    pool.query(q,(err, data) => {
        if (err) {
            console.error("DB ERROR:", err)
            return res.status(network.INTERNAL_SERVER_ERROR).json(err)
        } 
        return res.json(data)
    }) 
})

BookRoute.post("/", (req, res) => {
   const q = `
        INSERT INTO books (title, description, price, cover)
        VALUES (?, ?, ?, ?)
    `
    
    const { title, description, price, cover } = req.body

    if (!title || !description || !price) {
        return res.status(network.BAD_REQUEST).json({ 
            message: "Missing required fields" 
        })
    }

    const values = [ title, description, price, cover ]
     
    pool.query(q, values, (err, data) => {
        if (err) {
            console.error("DB ERROR:", err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({ 
                message: "Database error" 
            })
        } 
        return res.json({ message: "Book created successfully" })
    })
})

BookRoute.delete("/:id", (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM books WHERE id = ?"

    pool.query(q, [ bookId ], (err, data) => {
        if (err) {
            console.error(err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({ 
                message: "Error deleting book" 
            })
        }
        return res.json("Book deleted successfully")
    })
})

BookRoute.put("/:id", (req, res) => {
    const bookId = req.params.id

    const { title, description, price, cover } = req.body

    const q = `
        UPDATE books 
        SET title = ?, description = ?, price = ?, cover = ?
        WHERE id = ?
    `

    const values = [ title, description, price, cover ]

    pool.query(q, [...values, bookId], (err, data) => {
        if (err) {
            console.error(err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({ 
                message: "Error updating book" 
            })
        }
        return res.json("Book updated successfully")
    })
})

export default BookRoute