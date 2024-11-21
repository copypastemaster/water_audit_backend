import express, { Application, Request, Response } from "express";
import { User } from "../src/models/user.model"

const app: Application = express();
const PORT = 3000;

app.use('/', async (req: Request, res: Response) => {
  const result = await User.findAll();
  console.log('result: ', result);

  res.status(200).json(result);
})

app.listen(PORT, () => {
  console.log('Listening on port: %d', PORT);
})