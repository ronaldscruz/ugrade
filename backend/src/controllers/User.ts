import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository, Repository, In } from "typeorm";

import { Role } from "../entity/Role";
import { User } from "../entity/User";

class UserController {
  userRepository: Repository<User>;
  roleRepository: Repository<Role>;

  constructor() {
    this.userRepository = getRepository(User);
    this.roleRepository = getRepository(Role);
  }

  signIn = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Required body params not provided
      if (!email || !password) {
        res.status(400).send({
          error: "Authentication credentials not provided (email and password)",
        });
        return;
      }

      // Looking for user with this email
      const user = await this.userRepository.findOne({ where: { email } });

      if (!user) {
        res.status(400).send({ error: "Invalid credentials." });
        return;
      }

      // Comparing password vs hash
      const passwordMatches = await bcrypt.compare(password, user!.password);

      if (!passwordMatches) {
        res.status(400).send({ error: "Invalid credentials." });
        return;
      }

      // Everything ok, sending JWT...
      const { JWT_SECRET = "imsecret" } = process.env;
      const token = await jwt.sign({ userId: user!.id }, JWT_SECRET, {
        expiresIn: 28800,
      });

      res.status(200).send({ token });
    } catch (err) {
      res.status(400).send({ error: "Failed signing in. " + err });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      let user = { ...req.body };

      if (!user.roles) {
        res.status(400).send({ error: "Please, set roles for this user." });
        return;
      }

      const userRoles = await this.roleRepository.find({
        where: {
          id: In(user.roles),
        },
      });

      if (!user.roles || user.roles.length !== userRoles.length) {
        res.status(400).send({ error: "Invalid role found." });
        return;
      }

      user.roles = userRoles;
      user.password = await bcrypt.hash(user.password, 10);

      const created = await this.userRepository.save(user);

      res.status(200).send(created);
    } catch (err) {
      res.status(400).send({ error: "Failed creating user. " + err });
    }
  };

  all = async (req: Request, res: Response) => {
    try {
      const users = await this.userRepository.find({ relations: ["roles"] });
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ error: "Failed fetching users. " + err });
    }
  };

  one = async (req: Request, res: Response) => {
    try {
      const id = req.params?.id;

      if (id) {
        const user = await this.userRepository.findOne({
          where: { id },
          relations: ["roles"],
        });

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

      res.status(200).send({ email: updated!.email });
    } catch (err) {
      res.status(400).send({ error: "Failed updating user. " + err });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params?.id;

      if (id) {
        await this.userRepository.delete(id);
        res.status(200).send({ id });
      } else {
        res.status(400).send({ error: "Required param ID not provided. " });
      }
    } catch (err) {
      res.status(400).send({ error: "Failed removing user. " + err });
    }
  };
}

export default new UserController();
