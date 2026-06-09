export interface User {
  id: string
  email: string
  username: string
  role: 'user' | 'admin'
  avatar_url?: string
  created_at: string
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  author_id: string
  author_name: string
  status: 'draft' | 'published'
  thumbnail_url?: string
  tags: string[]
  created_at: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
