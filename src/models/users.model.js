import db from '../services/db.js';
import {
  createLoginByEmail,
  updateLoginByEmail,
  DeleteLoginByEmail,
} from './auth.model.js';

const createUser = async (name, email, password) => {
  const login = await createLoginByEmail(email, password);
  const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
  const user = await db.query(query, [name, login.email]);
  return user.rows[0];
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const result = await db.query(query, [id]);
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

const updateUser = async (id, name, email) => {
  const user = await getUserById(id);
  await updateLoginByEmail(user.email, email);
  const query =
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
  const result = await db.query(query, [name, email, id]);
  return result.rows[0];
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
  const result = await db.query(query, [id]);
  await DeleteLoginByEmail(result.rows[0].email);
  return result.rows[0];
};

export { createUser, getUserById, getUserByEmail, updateUser, deleteUser };
