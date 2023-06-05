import { Router } from 'express';

import { httpGetUsersById, httpGetUsersByEmail } from './users.controller.js';

const usersRouter = new Router();

usersRouter.get('/', httpGetUsersByEmail);
usersRouter.get('/:id', httpGetUsersById);

export default usersRouter;
