import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 24 },
  { name: "Doe", age: 26 },
  { name: "Smith", age: 27 },
  { name: "Alex", age: 28 },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
