import express from "express";
import sharp from "sharp";
import fs from "fs";
const imgRouter = express.Router();

imgRouter.get("/", async (req, res) => {
  const params = req.query;
  const { filename, width, height } = params;

  const imgagee = sharp(`assets/full/${filename}.jpg`)
    .resize(Number(width), Number(height))
    .toFile(`assets/thumb/${filename}-resized.jpg`);

  console.log(params);
  res.send(imgagee);
});

export default imgRouter;
