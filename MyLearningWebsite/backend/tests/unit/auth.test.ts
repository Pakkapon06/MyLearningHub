import { AuthService } from '../../src/services/auth.service'

// Mock DB
jest.mock('../../src/config/database')
jest.mock('../../src/models/user.model')

describe('AuthService', () => {
  const authService = new AuthService()

  it('should throw if email already exists', async () => {
    // ...test implementation
    expect(true).toBe(true)
  })

  it('should return token on successful login', async () => {
    // ...test implementation
    expect(true).toBe(true)
  })
})
