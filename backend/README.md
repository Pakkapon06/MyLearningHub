# Backend API

Express + TypeScript REST API

## Structure
```
src/
├── server.ts          ← Entry point, Express app setup
├── config/
│   ├── env.ts         ← Environment variables
│   └── database.ts    ← PostgreSQL connection pool
├── routes/            ← URL path definitions
├── controllers/       ← Request/Response handlers
├── services/          ← Business logic
├── models/            ← Database queries
├── middleware/        ← Auth, validation, error handling
├── types/             ← TypeScript types + Zod schemas
└── utils/             ← Helper functions
```

## API Endpoints

| Method | Path | Description | Auth |
|---|---|---|---|
| POST | /api/auth/register | สมัครสมาชิก | ✗ |
| POST | /api/auth/login | เข้าสู่ระบบ | ✗ |
| GET  | /api/auth/me | ดูข้อมูลตัวเอง | ✓ |
| GET  | /api/users | รายชื่อ users | Admin |
| GET  | /api/users/:id | ดู user | ✓ |
| PUT  | /api/users/:id | แก้ไข user | ✓ |
| GET  | /api/posts | รายการ posts | ✗ |
| POST | /api/posts | สร้าง post | ✓ |

## Run
```bash
npm run dev     # development
npm run build   # compile TypeScript
npm start       # production
npm test        # run tests
```
