import express from 'express';
import type { Application, Request, Response } from 'express';

const app: Application = express();

const port = 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
