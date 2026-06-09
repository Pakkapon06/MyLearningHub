import api from './api'

export const userApi = {
  getAll: async (page = 1, limit = 10) => {
    const res = await api.get(`/users?page=${page}&limit=${limit}`)
    return res.data
  },
  getById: async (id: string) => {
    const res = await api.get(`/users/${id}`)
    return res.data.data
  },
  update: async (id: string, data: any) => {
    const res = await api.put(`/users/${id}`, data)
    return res.data.data
  },
}
