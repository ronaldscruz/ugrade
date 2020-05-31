import { NextFunction } from 'express';
import { Request, Response } from '../interfaces/RequestInterfaces';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async function authMiddlware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { JWT_SECRET = '' } = process.env;

  let token = req.headers.authorization || '';

  if (!token || !token.includes('Bearer ')) next();

  token = token.split(' ')[1];

  try {
    const { id: userId } = <any>jwt.verify(token, JWT_SECRET);

    const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
    if (user) req.user = user.dataValues;

    next();
  } catch (err) {
    next();
  }
}
