#!/bin/bash
# ── Initial project setup ──────────────────────
echo "Setting up MyWebsite..."

# Copy env file
cp .env.example .env
echo "✓ .env created — remember to fill in your credentials!"

# Install dependencies
echo "Installing backend dependencies..."
cd backend && npm install
echo "Installing frontend dependencies..."
cd ../frontend && npm install
cd ..

echo ""
echo "✅ Setup complete!"
echo "Run: docker-compose up -d  →  starts DB + Redis"
echo "Run: cd backend && npm run dev"
echo "Run: cd frontend && npm run dev"
