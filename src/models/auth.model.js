import db from '../services/db.js';

const createLoginByEmail = async (email, password) => {
  const query =
    'INSERT INTO login (email, password) VALUES ($1, $2) RETURNING *';
  const login = await db.query(query, [email, password]);
  return login.rows[0];
};

const updateLoginByEmail = async (email, newEmail) => {
  const query = 'UPDATE login SET email = $1 WHERE email = $2 RETURNING *';
  const result = await db.query(query, [newEmail, email]);
  return result.rows[0];
};

const DeleteLoginByEmail = async (email) => {
  const query = 'DELETE FROM login WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

const loginByEmail = async (email) => {
  const query = 'SELECT * FROM login WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

const logoutByEmail = async (email) => {
  // Todo
};

const resetPasswordByEmail = async (email) => {
  // Todo
};

export {
  createLoginByEmail,
  updateLoginByEmail,
  DeleteLoginByEmail,
  loginByEmail,
  logoutByEmail,
  resetPasswordByEmail,
};
