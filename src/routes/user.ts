import { Router } from "express";
import { Authentication } from "../utils";
import { userServices } from "../services";

export const userRouter = Router();

// protected route
userRouter.get("/signin", Authentication.logout, userServices.signin);

userRouter.post("/signin", userServices.postSignin);

// non protected route
userRouter.get("/signup", userServices.signup);

userRouter.post("/signup", userServices.postSignup);

// protected route
userRouter.get("/logout", Authentication.login, userServices.logout);
