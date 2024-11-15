import express from "express";
import { responseInstance } from "./responseInstance";

const router = express.Router();

router.get("/profile", responseInstance);

export default router;