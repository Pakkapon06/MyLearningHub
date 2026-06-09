import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import { config } from './config/env'
import { errorHandler } from './middleware/errorHandler'
import { rateLimiter } from './middleware/rateLimiter'
import routes from './routes'

const app = express()

// ─── Security Middleware ───
app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }))
app.use(rateLimiter)

// ─── General Middleware ───
app.use(compression())
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Routes ───
app.use('/api', routes)

// ─── Health Check ───
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ─── Error Handler (must be last) ───
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`)
})

export default app
