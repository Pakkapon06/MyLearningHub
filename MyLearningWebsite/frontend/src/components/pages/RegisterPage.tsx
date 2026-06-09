import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <p className="text-gray-500 text-sm">Registration form goes here</p>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link to="/login" className="text-primary-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
