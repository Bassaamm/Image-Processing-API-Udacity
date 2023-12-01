import express from "express";
import imgRouter from "./api/imageApi";
const router = express.Router();

router.use("/img", imgRouter);

export default router;
