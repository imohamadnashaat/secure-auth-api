import db from '../services/db.js';
import { createLoginByEmail } from './auth.model.js';

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

const updateUser = async (email) => {
  // Todo
};

const deleteUser = async (email) => {
  // Todo
};

export { createUser, getUserById, getUserByEmail, updateUser, deleteUser };
