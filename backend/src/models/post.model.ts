import { pool } from '../config/database'

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  author_id: string
  status: 'draft' | 'published'
  thumbnail_url?: string
  tags: string[]
  created_at: Date
  updated_at: Date
}

export class PostModel {
  async findAll(limit: number, offset: number) {
    const { rows } = await pool.query(
      `SELECT p.*, u.username as author_name
       FROM posts p JOIN users u ON p.author_id = u.id
       WHERE p.status = 'published'
       ORDER BY p.created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    )
    return rows
  }

  async findById(id: string): Promise<Post | null> {
    const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [id])
    return rows[0] || null
  }

  async create(data: Partial<Post>): Promise<Post> {
    const { rows } = await pool.query(
      `INSERT INTO posts (title, slug, content, author_id, status, tags)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [data.title, data.slug, data.content, data.author_id, data.status || 'draft', data.tags || []]
    )
    return rows[0]
  }
}
