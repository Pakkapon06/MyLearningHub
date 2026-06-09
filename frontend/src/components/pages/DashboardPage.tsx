import { useAuthStore } from '../../context/auth.store'

export default function DashboardPage() {
  const { user } = useAuthStore()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="card">
        <p className="text-gray-600">Welcome back, <strong>{user?.username}</strong>!</p>
      </div>
    </div>
  )
}
