import { generateToken } from '../../utils/jwt.util.js';
import { hashPassword, comparePasswords } from '../../utils/bcrypt.util.js';
import { createUser, getUserByEmail } from '../../models/auth.model.js';

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await getUserByEmail(email);

    if (userExists) {
      return res.status(400).json({
        message: 'Unable to register with this email.',
      });
    }

    const hashedPassword = await hashPassword(password);
    await createUser(email, hashedPassword);

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = generateToken({ email });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { register, login };
