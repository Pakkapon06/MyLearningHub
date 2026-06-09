import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="text-gray-600 mt-4">Page not found</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Go Home</Link>
    </div>
  )
}
