import express from 'express';
import { config } from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRouter.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDB from './connectDB.js';

// dotenv config
config();
const app = express();
const port = process.env.port || 4001;
const db_url = process.env.DB_URL;

// db connect
connectDB(db_url, () => {
    app.listen(port, () => console.log(`server is running in port ${port}`))

})

// global middleware
app.use(express.json());
app.use(cors())


// routes
app.use('/api/auth/', authRouter);


// Error handler
app.use(errorMiddleware)


