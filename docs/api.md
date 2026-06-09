# API Documentation

Base URL: `http://localhost:5000/api`

## Authentication

ใช้ Bearer Token ใน Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Error Response Format

```json
{
  "success": false,
  "message": "Error description"
}
```

## Endpoints

### POST /auth/register
```json
// Request
{ "email": "user@example.com", "username": "johndoe", "password": "Secret@123" }

// Response 201
{ "success": true, "data": { "user": {...}, "token": "jwt..." } }
```

### POST /auth/login
```json
// Request
{ "email": "user@example.com", "password": "Secret@123" }

// Response 200
{ "success": true, "data": { "user": {...}, "token": "jwt..." } }
```
