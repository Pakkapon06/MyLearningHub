import { pool } from '../config/database'

export interface User {
  id: string
  email: string
  username: string
  password_hash: string
  role: 'user' | 'admin'
  avatar_url?: string
  is_verified: boolean
  created_at: Date
  updated_at: Date
}

export class UserModel {
  async findById(id: string): Promise<User | null> {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return rows[0] || null
  }

  async findByEmail(email: string): Promise<User | null> {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    return rows[0] || null
  }

  async create(data: Partial<User>): Promise<User> {
    const { rows } = await pool.query(
      `INSERT INTO users (email, username, password_hash, role)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [data.email, data.username, data.password_hash, data.role || 'user']
    )
    return rows[0]
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const fields = Object.keys(data).map((k, i) => `${k} = $${i + 2}`).join(', ')
    const values = Object.values(data)
    const { rows } = await pool.query(
      `UPDATE users SET ${fields}, updated_at = NOW() WHERE id = $1 RETURNING *`,
      [id, ...values]
    )
    return rows[0]
  }

  async findAll(limit: number, offset: number): Promise<{ users: User[], total: number }> {
    const [{ rows: users }, { rows: [{ count }] }] = await Promise.all([
      pool.query('SELECT * FROM users LIMIT $1 OFFSET $2', [limit, offset]),
      pool.query('SELECT COUNT(*) FROM users'),
    ])
    return { users, total: Number(count) }
  }

  async delete(id: string): Promise<void> {
    await pool.query('DELETE FROM users WHERE id = $1', [id])
  }
}
