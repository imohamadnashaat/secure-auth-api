import db from '../services/db.js';

const createUser = async (email, password) => {
  const query = 'INSERT INTO users (email, password) VALUES ($1, $2)';
  await db.query(query, [email, password]);
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};

export { createUser, getUserByEmail };
