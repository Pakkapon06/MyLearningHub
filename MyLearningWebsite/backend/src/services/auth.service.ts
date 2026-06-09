import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/user.model'
import { AppError } from '../middleware/errorHandler'
import { config } from '../config/env'

const userModel = new UserModel()

export class AuthService {
  async register(data: { email: string; username: string; password: string }) {
    const exists = await userModel.findByEmail(data.email)
    if (exists) throw new AppError('Email already in use', 409)

    const password_hash = await bcrypt.hash(data.password, 12)
    const user = await userModel.create({ ...data, password_hash })

    const token = this.generateToken(user.id)
    const { password_hash: _, ...safeUser } = user
    return { user: safeUser, token }
  }

  async login(data: { email: string; password: string }) {
    const user = await userModel.findByEmail(data.email)
    if (!user) throw new AppError('Invalid email or password', 401)

    const valid = await bcrypt.compare(data.password, user.password_hash)
    if (!valid) throw new AppError('Invalid email or password', 401)

    const token = this.generateToken(user.id)
    const { password_hash: _, ...safeUser } = user
    return { user: safeUser, token }
  }

  async logout(_userId: string) {
    // Invalidate token in Redis (optional)
  }

  async refresh(refreshToken: string) {
    const decoded = jwt.verify(refreshToken, config.jwtSecret) as { id: string }
    const token = this.generateToken(decoded.id)
    return { token }
  }

  private generateToken(userId: string) {
    return jwt.sign({ id: userId }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn as any,
    })
  }
}
