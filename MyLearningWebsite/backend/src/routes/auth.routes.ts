import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller'
import { authenticate } from '../middleware/authenticate'
import { validate } from '../middleware/validate'
import { loginSchema, registerSchema } from '../types/auth.types'

const router = Router()
const controller = new AuthController()

// POST /api/auth/register
router.post('/register', validate(registerSchema), controller.register)

// POST /api/auth/login
router.post('/login', validate(loginSchema), controller.login)

// POST /api/auth/logout
router.post('/logout', authenticate, controller.logout)

// GET  /api/auth/me
router.get('/me', authenticate, controller.me)

// POST /api/auth/refresh
router.post('/refresh', controller.refresh)

export default router
