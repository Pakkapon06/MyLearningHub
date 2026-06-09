import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { authenticate } from '../middleware/authenticate'
import { authorize } from '../middleware/authorize'
import { uploadAvatar } from '../middleware/upload'

const router = Router()
const controller = new UserController()

// All routes require authentication
router.use(authenticate)

router.get('/', authorize('admin'), controller.getAll)
router.get('/:id', controller.getById)
router.put('/:id', controller.update)
router.delete('/:id', authorize('admin'), controller.delete)
router.post('/:id/avatar', uploadAvatar, controller.updateAvatar)

export default router
