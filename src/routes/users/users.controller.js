import {
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
} from '../../models/users.model.js';

const httpGetUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

const httpGetUsersByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

const httpUpdateUser = async (req, res) => {
  // Todo
};

const httpDeleteUser = async (req, res) => {
  // Todo
};

export {
  httpGetUsersById,
  httpGetUsersByEmail,
  httpUpdateUser,
  httpDeleteUser,
};
