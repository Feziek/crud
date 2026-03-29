import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"

import { Chatbot } from "@components/Bot/Chatbot"

import axios from "axios"

export const Add = () => {
  const [ book, setBook ] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  })
  const [ error, setError ] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ 
      ...prev, 
      [ e.target.name ]: e.target.value 
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/books", book)
      navigate("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Add New Book
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            onChange={ handleChange }
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          <textarea
            rows={ 4 }
            placeholder="Book Description"
            name="description"
            onChange={ handleChange }
            required
            className="border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={ handleChange }
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          <input
            type="text"
            placeholder="Cover Image URL"
            name="cover"
            onChange={ handleChange }
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          { book.cover && (
            <div className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110">
              <img
                src={ book.cover }
                alt="Preview"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          )}

          { error && (
            <span className="text-red-500 text-sm text-center">
              Something went wrong. Please check all required fields and try again.
            </span>
          )}

          <button
            onClick={ handleClick }
            className="bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-black hover:scale-[1.02] transition duration-200"
          >
            Add Book
          </button>

          <Link
            to="/"
            className="text-center text-gray-600 hover:text-gray-900 hover:underline transition"
          >
            Back to all books
          </Link>
        </form>
      </div>
      <Chatbot />
    </div>
  )
}

