import { Router } from "express";
import { userController } from "../../../controllers/user/index.js";

export const formRouter = Router();

formRouter.get('/forms/login', userController.login_form_get);