import { Link, NavLink } from 'react-router-dom'
import { useAuthStore } from '../../context/auth.store'

export default function Navbar() {
  const { user, logout } = useAuthStore()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary-600">
          MyWebsite
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-gray-600 hover:text-gray-900">Home</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</NavLink>
              <button onClick={logout} className="btn-primary text-sm">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-gray-600 hover:text-gray-900">Login</NavLink>
              <NavLink to="/register" className="btn-primary text-sm">Sign Up</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
