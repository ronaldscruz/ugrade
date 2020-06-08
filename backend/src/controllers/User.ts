import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";

import { User } from "../entity/User";

class UserController {
  userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  create = async (req: Request, res: Response) => {
    try {
      const user = { ...req.body };
      const created = await this.userRepository.save(user);
      res.status(200).send(created);
    } catch (err) {
      res.status(400).send({ error: "Failed creating user. " + err });
    }
  };

  all = async (req: Request, res: Response) => {
    try {
      const users = await this.userRepository.find();
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ error: "Failed fetching users. " + err });
    }
  };

  one = async (req: Request, res: Response) => {
    try {
      const id = req.params?.id;

      if (id) {
        const user = await this.userRepository.findOne({ where: { id } });
        res.status(200).send(user);
      } else {
        res.status(400).send({ error: "Required param ID not provided. " });
      }
    } catch (err) {
      res.status(400).send({ error: "Failed fetching user. " + err });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const user = { ...req.body };
      await this.userRepository.update(user.id, user);

      const updated = await this.userRepository.findOne({
        where: { id: user.id },
      });
      res.status(200).send(updated);
    } catch (err) {
      res.status(400).send({ error: "Failed updating user. " + err });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params?.id;

      if (id) {
        const user = await this.userRepository.delete(id);
        res.status(200).send(user);
      } else {
        res.status(400).send({ error: "Required param ID not provided. " });
      }
    } catch (err) {
      res.status(400).send({ error: "Failed removing user. " + err });
    }
  };
}

export default new UserController();
