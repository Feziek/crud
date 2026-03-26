import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import axios from "axios"

export const Books = () => {
  const [ books, setBooks ] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("/api/books", books)
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  })

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${ id }`);
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  return(
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Books Store
      </h1>

      <div className="flex justify-center mb-8">
        <Link
          to="/add"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          + Add New Book
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={ book.id }
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={ book.cover }
              alt={ book.title }
              className="w-full h-56 object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-800">
                { book.title }
              </h2>

              <p className="text-gray-500 text-sm line-clamp-3">
                { book.description }
              </p>

              <span className="text-blue-600 font-semibold text-lg">
                ₱ { book.price }
              </span>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <Link
                  to={`/update/${ book.id }`}
                  className="flex-1 text-center bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}