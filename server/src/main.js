import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import BookRoute from "./routes/BookRoute.js"

import { ErrorHandler } from "./middleware/ErrorHandler.js"
import { network } from "./utils/constants.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get("/", (req, res) => {
    res.json("Backend is running successfully")
})

app.use("/api/books", BookRoute)

app.use((req, res) => {
    res.status(network.NOT_FOUND).json({ 
        message: "Route not found" 
    })
})

app.use(ErrorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running on ${ PORT }`)
})