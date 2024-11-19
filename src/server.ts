import express, { Application, Request, Response } from "express";
import { User } from "../src/models/user.model"

const app: Application = express();
const PORT = 3000;

app.use('/', async (req: Request, res: Response) => {
  await User.findAll().then(users => {
    res.json(users);
  })
})

app.listen(PORT, () => {
  console.log('Listening on port: %d', PORT);
})