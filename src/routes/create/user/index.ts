import express from "express";
import { createUser } from "./createUser";

const router = express.Router();

router.post("/user", createUser);

export default router;