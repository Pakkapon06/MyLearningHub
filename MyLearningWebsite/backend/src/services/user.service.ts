import { UserModel } from '../models/user.model'
import { AppError } from '../middleware/errorHandler'

const userModel = new UserModel()

export class UserService {
  async getAll(page: number, limit: number) {
    const offset = (page - 1) * limit
    const { users, total } = await userModel.findAll(limit, offset)
    return {
      data: users.map(({ password_hash: _, ...u }) => u),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    }
  }

  async getById(id: string) {
    const user = await userModel.findById(id)
    if (!user) throw new AppError('User not found', 404)
    const { password_hash: _, ...safeUser } = user
    return safeUser
  }

  async update(id: string, data: any) {
    const user = await userModel.update(id, data)
    const { password_hash: _, ...safeUser } = user
    return safeUser
  }

  async delete(id: string) {
    await userModel.delete(id)
  }

  async updateAvatar(id: string, file: Express.Multer.File) {
    const url = `/uploads/avatars/${file.filename}`
    await userModel.update(id, { avatar_url: url })
    return url
  }
}
