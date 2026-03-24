import express from "express"

import BookRoute from "./routes/BookRoute.js"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("Backend is running successfully")
})

app.use("/books", BookRoute)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`)
})