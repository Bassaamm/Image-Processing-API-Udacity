import express from "express";
import router from "./routes/routesIndex";
const app = express();
const port = 3008;

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
