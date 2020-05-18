const userRouter = require('express').Router();

userRouter.post('/', (req, res) => UserController.create(req, res));

module.exports = userRouter;
