import { Router } from 'express';
import RoleController from '../controllers/Role';

const roleRouter = Router();

roleRouter.get('/:id', (req, res) => RoleController.one(req, res));
roleRouter.get('/', (req, res) => RoleController.get(req, res));
roleRouter.post('/', (req, res) => RoleController.create(req, res));
roleRouter.put('/:id', (req, res) => RoleController.update(req, res));
roleRouter.delete('/:id', (req, res) => RoleController.delete(req, res));

export default roleRouter;
