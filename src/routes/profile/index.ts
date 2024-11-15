import express from "express";
import { responseInstance } from "./responseInstance";
import { authMiddleware } from "../../middlewares/auth";

const router = express.Router();

router.get("/profile", authMiddleware, responseInstance);

export default router;