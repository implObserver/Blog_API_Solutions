import { Router } from "express";
import { userController } from "../../../controllers/user/index.js";

export const userRouter = Router();

userRouter.post("/user/signup", userController.user_create_post);
userRouter.post("/user/login", userController.user_auth_post, userController.user_token_post);
userRouter.post("/user/logout", userController.user_logout_post);
userRouter.get("/user/protected", userController.user_auth_jwt_protected);
userRouter.get("/user/failure", userController.failureProtected);