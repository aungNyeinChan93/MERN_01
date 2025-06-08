import { Router } from "express";
import authController from "../controllers/authController.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";

const authRouter = Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', tokenMiddleware, authController.login);

export default authRouter;