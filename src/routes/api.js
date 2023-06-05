import { Router } from 'express';

import { verifyTokenMiddleware } from '../middlewares/auth.middleware.js';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';

const api = Router();

api.use('/auth', authRouter);
api.use('/users', verifyTokenMiddleware, usersRouter);

api.get('/protected', verifyTokenMiddleware, (req, res) => {
  // Protected route logic here
  res.status(200).json({ message: 'ok' });
});

export default api;
