import { useAuthStore } from '../context/auth.store'

export const useAuth = () => {
  const { user, token, logout } = useAuthStore()
  return {
    user,
    token,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    logout,
  }
}
