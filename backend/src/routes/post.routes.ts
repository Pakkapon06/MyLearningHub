import { Router } from 'express'
import { PostController } from '../controllers/post.controller'
import { authenticate } from '../middleware/authenticate'

const router = Router()
const controller = new PostController()

router.get('/', controller.getAll)            // Public
router.get('/:id', controller.getById)        // Public
router.post('/', authenticate, controller.create)
router.put('/:id', authenticate, controller.update)
router.delete('/:id', authenticate, controller.delete)

export default router
