import express from "express"
import {
    getBooks,
    addBook,
    removeBook,
    editBook
} from "../controllers/BookController.js"

import { ValidateBook } from "../middleware/ValidateBook.js"

const BookRoute = express.Router()

BookRoute.get("/", getBooks)
BookRoute.post("/", ValidateBook, addBook)
BookRoute.delete("/:id", removeBook)
BookRoute.put("/:id", ValidateBook, editBook)

export default BookRoute