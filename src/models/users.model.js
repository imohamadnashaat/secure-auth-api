import db from '../services/db.js';
import {
  createLoginByEmail,
  updateLoginByEmail,
  deleteLoginByEmail,
} from './auth.model.js';

const createUser = async (name, email, password) => {
  const login = await createLoginByEmail(email, password);
  const user = await db('users').insert({ name, email }).returning('*');
  return user[0];
};

const getUserById = async (id) => {
  const user = await db('users').where('id', id).first();
  return user;
};

const getUserByEmail = async (email) => {
  const user = await db('users').where('email', email).first();
  return user;
};

const updateUser = async (id, name, email) => {
  const user = await getUserById(id);
  await updateLoginByEmail(user.email, email);
  const result = await db('users')
    .where('id', id)
    .update({ name, email })
    .returning('*');
  return result[0];
};

const deleteUser = async (id) => {
  const user = await getUserById(id);
  await deleteLoginByEmail(user.email);
  const result = await db('users').where('id', id).del().returning('*');
  return result[0];
};

export { createUser, getUserById, getUserByEmail, updateUser, deleteUser };
