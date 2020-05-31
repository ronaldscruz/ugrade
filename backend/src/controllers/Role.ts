import Role from '../models/Role';
import { Request, Response } from '../interfaces/RequestInterfaces';

class RoleController {
  get = async (req: Request, res: Response) => {
    try {
      const roles = await Role.findAll();
      res.status(200).send(roles);
    } catch (err) {
      res.status(400).send({ error: 'Failed fetching roles: ' + err });
    }
  };

  one = async (req: Request, res: Response) => {
    const roleId = req.params.id;

    try {
      const roles = await Role.findByPk(roleId);

      res.status(200).send(roles);
    } catch (err) {
      res.status(400).send({ error: 'Failed fetching roles: ' + err });
    }
  };

  create = async (req: Request, res: Response) => {
    const role = req.body;

    try {
      const createdRole = await Role.create(role);
      res.status(200).send(createdRole);
    } catch (err) {
      res.status(400).send({ error: 'Failed creating role: ' + err });
    }
  };

  update = async (req: Request, res: Response) => {
    const roleId = req.params.id;
    const role = req.body;

    try {
      const updatedRole = await Role.update(role, { where: { id: roleId } });
      res.status(200).send(updatedRole);
    } catch (err) {
      res.status(400).send({ error: 'Failed updating role: ' + err });
    }
  };

  delete = async (req: Request, res: Response) => {
    const roleId = req.params.id;

    try {
      await Role.destroy({ where: { id: roleId } });
      res.status(200);
    } catch (err) {
      res.status(400).send({ error: 'Failed removing role: ' + err });
    }
  };
}

export default new RoleController();
