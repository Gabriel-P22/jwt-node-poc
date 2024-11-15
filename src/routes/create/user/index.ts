import express from "express";
import { responseInstance } from "./responseInstance";

const router = express.Router();

router.post("/user", responseInstance);

export default router;