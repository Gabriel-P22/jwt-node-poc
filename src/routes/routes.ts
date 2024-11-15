import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";

import create from "./create";
import login from "./login";
import profile from "./profile";

const routes = Router();

routes.use("/", create);
routes.use("/", login);
routes.use("/", authMiddleware, profile);

export default routes;
