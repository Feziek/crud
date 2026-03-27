import * as Book from "../models/BookModel.js"

import { network } from "../utils/constants.js"

export const getBooks = (req, res) => {
    Book.getAllBooks((err, data) => {
        if (err) {
            console.error(err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({
                message: "Failed to fetch books"
            })
        }
        res.json(data)
    })
}

export const addBook = (req, res) => {
    const { title, description, price, cover } = req.body
    const values = [ title, description, price, cover ]

    Book.createBook(values, (err) => {
        if (err) {
            console.error(err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({
                message: "Database error"
            })
        }
        res.json({ 
            message: "Book created successfully" 
        })
    })
}

export const removeBook = (req, res) => {
    const { id } = req.params

    Book.deleteBook(id, (err) => {
        if (err) {
            console.error(err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({
                message: "Error deleting book"
            })
        }
        res.json({ 
            message: "Book deleted successfully" 
        })
    })
}

export const editBook = (req, res) => {
    const { id } = req.params
    const { title, description, price, cover } = req.body

    const values = [ title, description, price, cover ]

    Book.updateBook(id, values, (err) => {
        if (err) {
            console.error(err)
            return res.status(network.INTERNAL_SERVER_ERROR).json({
                message: "Error updating book"
            })
        }
        res.json({ 
            message: "Book updated successfully" 
        })
    })
}