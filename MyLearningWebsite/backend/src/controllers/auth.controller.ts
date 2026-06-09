import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../services/auth.service'

export class AuthController {
  private authService = new AuthService()

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.register(req.body)
      res.status(201).json({ success: true, data: result })
    } catch (err) {
      next(err)
    }
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.login(req.body)
      res.json({ success: true, data: result })
    } catch (err) {
      next(err)
    }
  }

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.logout(req.user!.id)
      res.json({ success: true, message: 'Logged out successfully' })
    } catch (err) {
      next(err)
    }
  }

  me = async (req: Request, res: Response) => {
    res.json({ success: true, data: req.user })
  }

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.body
      const result = await this.authService.refresh(refreshToken)
      res.json({ success: true, data: result })
    } catch (err) {
      next(err)
    }
  }
}
