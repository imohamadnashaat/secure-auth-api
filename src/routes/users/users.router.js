import { Router } from 'express';

import {
  httpGetUsersById,
  httpGetUsersByEmail,
  httpUpdateUser,
  httpDeleteUser,
} from './users.controller.js';

const usersRouter = new Router();

usersRouter.get('/', httpGetUsersByEmail);
usersRouter.get('/:id', httpGetUsersById);
usersRouter.put('/:id', httpUpdateUser);
usersRouter.delete('/:id', httpDeleteUser);

export default usersRouter;
