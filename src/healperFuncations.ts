import express from "express";
import fs from "fs";
import sharp from "sharp";

// used in the imgRouter router to resize the image if the inputs were validated
export async function imageResize(req: express.Request): Promise<void> {
  const params = req.query;
  const { filename, width, height } = params;
  const imagesPath = `assets/full/${filename}.jpg`;
  const resizedImagesPath = `assets/thumb/${filename}-${width}-${height}.jpg`;

  fs.existsSync(resizedImagesPath)
    ? fs.readFileSync(resizedImagesPath)
    : await sharp(imagesPath)
        .resize(Number(width), Number(height))
        .toFile(resizedImagesPath);
}

// check the vlidaty of the input provided through the url
export function checkParamsValidaty(req: express.Request): boolean {
  const params = req.query;
  const { filename, width, height } = params;
  const widthAsNumber = Number(width);
  const heightAsNumber = Number(height);

  if (
    !filename ||
    !widthAsNumber ||
    isNaN(widthAsNumber) ||
    !heightAsNumber ||
    isNaN(heightAsNumber) ||
    widthAsNumber < 0 ||
    heightAsNumber < 0
  )
    return true;
  else return false;
}
