import express from "express";
import fs from "fs";
import { imageMiddleware } from "../../middleware/imageMiddleware";
import { imageResize } from "../../healperFuncations";

const imgRouter = express.Router();

imgRouter.get("/", imageMiddleware, async (req, res) => {
  const params = req.query;
  const { filename, width, height } = params;

  try {
    await imageResize(req);
  } catch (err) {
    console.log(err);
  }

  const resizedImagesPath = `assets/thumb/${filename}-${width}-${height}.jpg`;
  res
    .contentType("image/jpg")
    .status(200)
    .send(fs.readFileSync(resizedImagesPath));
});

export default imgRouter;
