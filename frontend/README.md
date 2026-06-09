# Frontend

React 18 + TypeScript + Tailwind CSS

## Structure
```
src/
├── main.tsx               ← Entry point
├── App.tsx                ← Routes definition
├── components/
│   ├── layout/            ← Navbar, Footer, MainLayout
│   ├── pages/             ← Full page components
│   └── common/            ← Reusable UI components
├── context/               ← Zustand state stores
├── services/              ← Axios API calls
├── hooks/                 ← Custom React hooks
├── utils/                 ← Helper functions
├── types/                 ← TypeScript interfaces
├── styles/                ← Global CSS
└── assets/                ← Images, icons, fonts
```

## Key Patterns

**State Management** — Zustand (auth.store.ts)
**Data Fetching** — React Query (@tanstack/react-query)
**Routing** — React Router v6
**Styling** — Tailwind CSS with custom components

## Run
```bash
npm run dev     # development (port 3000)
npm run build   # production build
npm test        # vitest
```
