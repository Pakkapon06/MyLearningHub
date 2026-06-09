# 🌐 MyWebsite — Full-Stack Web Application

โครงสร้าง repo นี้แสดงการจัดระเบียบ codebase ของ website จริงที่มี **Frontend + Backend + Database + DevOps** ครบทุกส่วน

---

## 📁 Project Structure

```
my-website/
├── frontend/                  ← React + TypeScript (UI)
├── backend/                   ← Node.js + Express (API)
├── database/                  ← SQL schemas, migrations, seeds
├── nginx/                     ← Reverse proxy config
├── docs/                      ← Project documentation
├── scripts/                   ← Setup & utility scripts
├── .github/workflows/         ← CI/CD (GitHub Actions)
├── docker-compose.yml         ← สั่ง run ทุก service พร้อมกัน
└── .env.example               ← Template environment variables
```

---

## 🏗️ Architecture Overview

```
Browser
  │
  ▼
[Nginx :80]  ← Reverse proxy, load balancer, SSL termination
  │
  ├─► [Frontend :3000]  React SPA (served as static files)
  │
  └─► [Backend  :5000]  Express REST API
          │
          ├─► [PostgreSQL :5432]  Relational database
          └─► [Redis      :6379]  Cache / session store
```

---

## 🚀 Quick Start

```bash
# 1. Clone & setup
git clone <repo-url>
cd my-website
bash scripts/setup.sh

# 2. Start databases (Docker)
docker-compose up -d db redis

# 3. Run backend (dev mode)
cd backend && npm run dev

# 4. Run frontend (dev mode)
cd frontend && npm run dev

# 5. Or run everything with Docker
docker-compose up --build
```

---

## 🔑 Environment Variables

ดู `.env.example` สำหรับ variable ทั้งหมด — copy แล้ว rename เป็น `.env`

| Variable | คำอธิบาย |
|---|---|
| `PORT` | Backend server port (default: 5000) |
| `DB_*` | PostgreSQL connection details |
| `JWT_SECRET` | Secret key สำหรับ sign JWT tokens |
| `REDIS_URL` | Redis connection URL |
| `VITE_API_BASE_URL` | Frontend → Backend API URL |

---

## 📌 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Zustand, React Query |
| **Backend** | Node.js, Express, TypeScript, Zod (validation) |
| **Database** | PostgreSQL 16 |
| **Cache** | Redis 7 |
| **Auth** | JWT (Access Token + Refresh Token) |
| **DevOps** | Docker, Nginx, GitHub Actions |

---

## 📚 Further Reading

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)
- [API Documentation](./docs/api.md)
