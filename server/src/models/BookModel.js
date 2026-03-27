import { pool } from "../lib/db.js"

export const getAllBooks = (callback) => {
    pool.query("SELECT * FROM books", callback)
}

export const createBook = (values, callback) => {
    const q = `
        INSERT INTO books (title, description, price, cover)
        VALUES (?, ?, ?, ?)
    `
    pool.query(q, values, callback)
}

export const deleteBook = (id, callback) => {
    pool.query("DELETE FROM books WHERE id = ?", [ id ], callback)
}

export const updateBook = (id, values, callback) => {
    const q = `
        UPDATE books 
        SET title = ?, description = ?, price = ?, cover = ?
        WHERE id = ?
    `
    pool.query(q, [ ...values, id ], callback)
}