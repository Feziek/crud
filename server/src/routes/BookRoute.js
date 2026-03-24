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

BookRoute.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
    
    const { title, description, cover } = req.body
   
    const values = [ title, description, cover ]
     
    pool.query(q, [ values ], (err, data) => {
        if (err) {
            console.error("DB ERROR:", err)
            return res.status(network.INTERNAL_SERVER_ERROR).json(err)
        } 
        return res.json("Book has been created successfully")
    })
    console.log("BODY:", req.body)
})

export default BookRoute