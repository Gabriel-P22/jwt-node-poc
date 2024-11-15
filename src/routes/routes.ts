import { Router } from "express";
import create from "./create";
import login from "./login";
import profile from "./profile";

const routes = Router();

routes.use("/", create)
routes.use("/", login)
routes.use("/", profile)

export default routes;
