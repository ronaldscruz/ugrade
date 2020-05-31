import { Router } from 'express';
import UserController from '../controllers/User';

const userRouter = Router();

userRouter.post('/signin', (req, res) => UserController.login(req, res));
userRouter.get('/:id', (req, res) => UserController.one(req, res));
userRouter.get('/', (req, res) => UserController.get(req, res));
userRouter.post('/', (req, res) => UserController.create(req, res));
userRouter.put('/:id', (req, res) => UserController.update(req, res));
userRouter.delete('/:id', (req, res) => UserController.delete(req, res));

export default userRouter;
