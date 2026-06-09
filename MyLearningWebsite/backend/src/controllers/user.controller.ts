import { Request, Response, NextFunction } from 'express'
import { UserService } from '../services/user.service'

export class UserController {
  private userService = new UserService()

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page = 1, limit = 10 } = req.query
      const result = await this.userService.getAll(Number(page), Number(limit))
      res.json({ success: true, ...result })
    } catch (err) { next(err) }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.getById(req.params.id)
      res.json({ success: true, data: user })
    } catch (err) { next(err) }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.update(req.params.id, req.body)
      res.json({ success: true, data: user })
    } catch (err) { next(err) }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.userService.delete(req.params.id)
      res.json({ success: true, message: 'User deleted' })
    } catch (err) { next(err) }
  }

  updateAvatar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const url = await this.userService.updateAvatar(req.params.id, req.file!)
      res.json({ success: true, data: { avatarUrl: url } })
    } catch (err) { next(err) }
  }
}
