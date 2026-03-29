import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </p>
      <p className="mt-2 text-center text-gray-500">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-gray-700 px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Return Home
      </Link>
    </div>
  )
}
