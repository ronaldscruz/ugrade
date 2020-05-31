import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response } from '../interfaces/RequestInterfaces';

const { JWT_SECRET = '' } = process.env;

class UserController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      const validPwd = await bcrypt.compare(password, user.password);

      if (!validPwd) {
        res.status(400).send({ error: 'Invalid credentials' });
      } else {
        const token = await jwt.sign({ id: user.id }, JWT_SECRET, {
          expiresIn: '1 day',
        });

        res.status(200).send({ token });
      }
    } catch (err) {
      res.status(400).send({ error: 'Invalid credentials' });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const users = await User.findAll({ attributes: { exclude: ['password'] } });
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ error: 'Failed fetching users: ' + err });
    }
  };

  one = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
      const users = await User.findByPk(userId, {
        attributes: { exclude: ['password'] },
      });

      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ error: 'Failed fetching users: ' + err });
    }
  };

  create = async (req: Request, res: Response) => {
    const user = req.body;

    try {
      const createdUser = await User.create(user);
      res.status(200).send(createdUser);
    } catch (err) {
      res.status(400).send({ error: 'Failed creating user: ' + err });
    }
  };

  update = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = req.body;

    try {
      const updatedUser = await User.update(user, { where: { id: userId } });
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(400).send({ error: 'Failed updating user: ' + err });
    }
  };

  delete = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
      await User.destroy({ where: { id: userId } });
      res.status(200);
    } catch (err) {
      res.status(400).send({ error: 'Failed removing user: ' + err });
    }
  };
}

export default new UserController();
