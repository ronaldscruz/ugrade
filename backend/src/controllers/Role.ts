import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";

import { Role } from "../entity/Role";

class RoleController {
  roleRepository: Repository<Role>;

  constructor() {
    this.roleRepository = getRepository(Role);
  }

  create = async (req: Request, res: Response) => {
    try {
      let role = { ...req.body };

      const created = await this.roleRepository.save(role);
      res.status(200).send({ id: created.id, name: created.name });
    } catch (err) {
      res.status(400).send({ error: "Failed creating role. " + err });
    }
  };

  all = async (req: Request, res: Response) => {
    try {
      const roles = await this.roleRepository.find();
      res.status(200).send(roles);
    } catch (err) {
      res.status(400).send({ error: "Failed fetching roles. " + err });
    }
  };

  one = async (req: Request, res: Response) => {
    try {
      const id = req.params?.id;

      if (id) {
        const role = await this.roleRepository.findOne({
          where: { id },
        });

        res.status(200).send(role);
      } else {
        res.status(400).send({ error: "Required param ID not provided. " });
      }
    } catch (err) {
      res.status(400).send({ error: "Failed fetching role. " + err });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const role = { ...req.body };

      await this.roleRepository.update(role.id, role);

      const updated = await this.roleRepository.findOne({
        where: { id: role.id },
      });

      res.status(200).send({ name: updated!.name });
    } catch (err) {
      res.status(400).send({ error: "Failed updating role. " + err });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params?.id;

      if (id) {
        await this.roleRepository.delete(id);
        res.status(200).send({ id });
      } else {
        res.status(400).send({ error: "Required param ID not provided. " });
      }
    } catch (err) {
      res.status(400).send({ error: "Failed removing role. " + err });
    }
  };
}

export default new RoleController();
