import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import BookRoute from "./routes/BookRoute.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}))

app.get("/", (req, res) => {
    res.json("Backend is running successfully")
})

app.use("/api/books", BookRoute)

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" })
})

app.use((err, req, res, next) => {
    console.error("GLOBAL ERROR:", err)
    res.status(500).json({ message: "Something went wrong" })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running on ${ PORT }`)
})