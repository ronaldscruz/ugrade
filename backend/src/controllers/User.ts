import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

export default class UserController {
  userRepository = getRepository(User);

  async create(req: Request, res: Response) {
    await this.userRepository.save(req.body);
  }
}
