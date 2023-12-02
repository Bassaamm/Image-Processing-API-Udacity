import express, { NextFunction } from "express";
import fs from "fs";
import { checkParamsValidaty } from "../healperFuncations";

// middleware for checking the validty of the input from the user, if a photo with the provided name exist.
export const imageMiddleware = (
  req: express.Request,
  res: express.Response,
  next: NextFunction,
) => {
  const params = req.query;
  const { filename } = params;
  if (checkParamsValidaty(req)) {
    return next(
      new Error(
        "Please provide a correct filename, width and height ( width and height must be a postive number)",
      ),
    );
  }
  if (!fs.existsSync(`assets/full/${filename}.jpg`)) {
    return next(new Error("File does not exist"));
  }
  next();
};
