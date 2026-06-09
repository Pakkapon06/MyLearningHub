-- Migration 001: Add bio column to users
ALTER TABLE users ADD COLUMN IF NOT EXISTS bio TEXT;
