import { Router } from "express";
import { userController } from "../../../controllers/user/index.js";

export const userRouter = Router();

userRouter.get("/signup", userController.user_create_get);
userRouter.post("/signup", userController.user_create_post);
userRouter.get("/login", userController.user_auth_get);
userRouter.post("/login", userController.user_auth_post);
userRouter.get("/logout", userController.user_logout_get);
userRouter.get("/protected", userController.user_auth_jwt_protected);
userRouter.get("/success", userController.sucessProtected);
userRouter.get("/failure", userController.failureProtected);