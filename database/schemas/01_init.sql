-- ══════════════════════════════════════════════
--  Database Schema — MyWebsite
-- ══════════════════════════════════════════════

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Users ───
CREATE TABLE users (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email        VARCHAR(255) UNIQUE NOT NULL,
  username     VARCHAR(50)  UNIQUE NOT NULL,
  password_hash TEXT        NOT NULL,
  role         VARCHAR(20)  NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin')),
  avatar_url   TEXT,
  is_verified  BOOLEAN      NOT NULL DEFAULT false,
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ─── Posts ───
CREATE TABLE posts (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title         VARCHAR(255) NOT NULL,
  slug          VARCHAR(255) UNIQUE NOT NULL,
  content       TEXT         NOT NULL,
  author_id     UUID         NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status        VARCHAR(20)  NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  thumbnail_url TEXT,
  tags          TEXT[]       NOT NULL DEFAULT '{}',
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ─── Sessions (optional, for JWT invalidation) ───
CREATE TABLE refresh_tokens (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Indexes ───
CREATE INDEX idx_users_email    ON users(email);
CREATE INDEX idx_posts_slug     ON posts(slug);
CREATE INDEX idx_posts_author   ON posts(author_id);
CREATE INDEX idx_posts_status   ON posts(status);
