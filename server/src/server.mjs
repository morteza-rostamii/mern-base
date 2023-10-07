import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

// express instance
const app = express();

// setup .env
dotenv.config();

// backend PORT
const PORT = process.env.PORT || 5000;

// activate cors
app.use(cors());

// setup json parsing
app.use(express.json());

// connect to db

app.use('/api/home/', (req, res) => {
  res.json({
    msg: 'this is backend!',
  });
});

// catch all route
app.use('*', (req, res) => {
  res.status(404).send('page not found');
});

// start node server
app.listen(PORT, () => {

  console.log(`node running on port: ${PORT}`);
});