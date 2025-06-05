import express from 'express';
import { config } from 'dotenv'

// dotenv config
config();
const app = express();
const port = process.env.port || 4001

console.log('hello world!');



app.listen(port, () => console.log(`server is running in port ${port}`))