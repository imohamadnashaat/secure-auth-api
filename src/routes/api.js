import { Router } from 'express';

import { verifyTokenMiddleware } from '../middlewares/auth.middleware.js';
import { authRouter } from './auth/auth.router.js';

const api = Router();

api.use('/auth', authRouter);
api.get('/protected', verifyTokenMiddleware, (req, res) => {
  // Protected route logic here
  res.status(200).json({ message: 'Token is valid' });
});

export default api;
