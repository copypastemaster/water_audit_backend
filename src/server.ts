import express, { Application } from "express";

const app: Application = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('Listening on port: %d', PORT);
})