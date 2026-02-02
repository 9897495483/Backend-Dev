import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
// import dotenv from 'dotenv';
// dotenv.config();
const app=express();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filepath=path.join(__dirname,'public');
const port= 3000;

app.use("/static", express.static(filepath));

app.get('/', (req, res) => {
  res.send("Welcome to the Static File Server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});