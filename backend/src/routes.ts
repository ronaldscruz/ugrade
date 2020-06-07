import { Router } from "express";
import UserController from "./controllers/User";

const router = Router();

router.post("/user", UserController.create);
router.get("/user", UserController.all);
router.get("/user/:id", UserController.one);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);

export default router;
