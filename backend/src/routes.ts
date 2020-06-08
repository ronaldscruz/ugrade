import { Router } from "express";

import RoleController from "./controllers/Role";
import UserController from "./controllers/User";

const router = Router();

// User & Auth
router.post("/signin", UserController.signIn);
router.post("/user", UserController.create);
router.get("/user", UserController.all);
router.get("/user/:id", UserController.one);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);

// Role
router.post("/role", RoleController.create);
router.get("/role", RoleController.all);
router.get("/role/:id", RoleController.one);
router.put("/role/:id", RoleController.update);
router.delete("/role/:id", RoleController.delete);

export default router;
