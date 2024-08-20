import { Router } from "express";
import { userController } from "../../../controllers/user/index.js";

export const userRouter = Router();

userRouter.post("/signup", userController.user_create_post);
userRouter.post("/login", userController.user_auth_post, userController.user_token_post);
userRouter.get("/logout", userController.user_logout_get);
userRouter.get("/protected", userController.user_auth_jwt_protected);
userRouter.get("/failure", userController.failureProtected);