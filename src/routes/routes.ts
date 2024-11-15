import { RequestHandler, Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();


routes.post("/create", (req, res) => {
    new UserController().create(req, res);
});

export default routes;
