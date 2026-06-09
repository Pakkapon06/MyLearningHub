-- Seed data: default admin user (password: Admin@1234)
INSERT INTO users (email, username, password_hash, role, is_verified)
VALUES (
  'admin@example.com',
  'admin',
  '$2a$12$examplehashhere',  -- replace with real bcrypt hash
  'admin',
  true
);
