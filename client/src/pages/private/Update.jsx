import { Link, useLocation, useNavigate } from "react-router-dom"

import { useState } from "react"

import axios from "axios"

export const Update = () => {

  const [ book, setBook ] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  })

  const [ error, setError ] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const bookId = location.pathname.split("/")[ 2 ]

  const handleChange = (e) => {
    setBook((prev) => ({ 
      ...prev, 
      [ e.target.name ]: e.target.value 
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`/api/books/${ bookId }`, book)
      navigate("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update the Book
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={ 5 }
            placeholder="Book description"
            name="description"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <input
            type="number"
            placeholder="Book price"
            name="price"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Book cover URL"
            name="cover"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={ handleClick }
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Update
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong!
            </p>
          )}

          <Link
            to="/"
            className="text-center text-blue-600 hover:underline text-sm"
          >
            See all books
          </Link>
        </div>
      </div>
    </div>
  )
}