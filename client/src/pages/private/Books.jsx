import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { Chatbot } from "@components/Bot/Chatbot"

import axios from "axios"

export const Books = () => {
  const [ books, setBooks ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("/api/books")
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAllBooks()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${ id }`);
      setBooks((prev) => prev.filter((book) => book.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        Loading...
      </div>
    )
  }
  
  return(
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Books Store
      </h1>

      <div className="flex justify-center mb-10">
        <Link
          to="/add"
          className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-black hover:scale-105 transition"
        >
          + Add Book
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { books.length === 0 ? (
          <div className="text-center col-span-full mt-20">
            <h2 className="text-2xl font-bold text-gray-700">
              Store is empty 
            </h2>
            <p className="text-gray-500 mt-2">
              Please add a book to get started.
            </p>
          </div>
        ) : (
          books.map((book) => (
            <div
              key={ book.id }
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="w-full aspect-2/3 overflow-hidden rounded-lg">
                <img
                  src={ book.cover }
                  alt={ book.title }
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                  { book.title }
                </h2>

                <p className="text-gray-500 text-sm line-clamp-3">
                  { book.description }
                </p>

                <span className="text-gray-900 font-bold text-xl">
                  ₱ { book.price }
                </span>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="flex-1 bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>

                  <Link
                    to={`/update/${ book.id }`}
                    className="flex-1 text-center bg-gray-800 text-white p-3 rounded-lg hover:bg-black transition"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Chatbot />
    </div>
  )
}