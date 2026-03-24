import express from "express"

import { pool } from "./lib/db.js"

const app = express()

app.get("/", (req, res) => {
    res.json("Backend is running successfully")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    pool.query(q,(err, data) => {
        if (err) {
            console.error("DB ERROR:", err)
            return res.status(500).json(err)
        } 
        return res.json(data)
    }) 
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`)
})