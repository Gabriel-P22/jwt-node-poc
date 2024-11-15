import { Router } from "express";
import create from "./create";

const routes = Router();

routes.use("/", create)

export default routes;
