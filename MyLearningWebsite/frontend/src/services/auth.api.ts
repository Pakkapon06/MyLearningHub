import api from './api'

export const authApi = {
  register: async (data: { email: string; username: string; password: string }) => {
    const res = await api.post('/auth/register', data)
    return res.data.data
  },
  login: async (data: { email: string; password: string }) => {
    const res = await api.post('/auth/login', data)
    return res.data.data
  },
  me: async () => {
    const res = await api.get('/auth/me')
    return res.data.data
  },
}
