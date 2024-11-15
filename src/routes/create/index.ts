import express from "express";
import user from "./user"

const router = express.Router();

router.use("/create", user);

export default router;