import express from "express";
import { responseInstance } from "./responseInstance";
import profile from "../../profile";

const router = express.Router();

router.post("/user", responseInstance);

export default router;