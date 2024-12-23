import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/', (req: Request, res: Response) => {
  res.json("test");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
