import express from "express";
import { responseInstance } from "./responseInstance";

const router = express.Router();

router.use("/login", responseInstance);

export default router;