import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config/env'
import { UserModel } from '../models/user.model'

const userModel = new UserModel()

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string; role: string }
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ success: false, message: 'No token provided' })

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { id: string }
    const user = await userModel.findById(decoded.id)
    if (!user) return res.status(401).json({ success: false, message: 'User not found' })

    req.user = { id: user.id, email: user.email, role: user.role }
    next()
  } catch {
    res.status(401).json({ success: false, message: 'Invalid token' })
  }
}
