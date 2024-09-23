import { Router } from "express";
import { userController } from "../../../controllers/user/index.js";

export const userRouter = Router();

userRouter.post("/user/signup", userController.user_create_post, userController.send_email);
userRouter.post("/user/login", userController.user_auth_post, userController.authProtected, userController.set_cookie, userController.user_get);
userRouter.post("/user/logout", userController.user_logout_post);
userRouter.get("/user/refresh-acess-token", userController.refresh_acessToken, userController.set_cookie, userController.user_get);
userRouter.get("/user/refresh-refresh-token", userController.refresh_refreshToken, userController.set_cookie, userController.user_get);
userRouter.get("/user/protected", userController.user_auth_jwt_protected);
userRouter.get("/user/failure", userController.failureProtected);
userRouter.get("/confirm-email/", userController.confirm_email, userController.redirect_main);
