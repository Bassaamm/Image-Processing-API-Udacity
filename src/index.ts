import express from "express";
import router from "./routes/routesIndex";
export const app = express();
const port = 3008;

app.use("/api", router);
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    res.status(500).send({
      error: err.message,
    });
  },
);
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
