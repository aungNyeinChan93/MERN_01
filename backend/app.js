import express from 'express';
import { config } from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRouter.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDB from './connectDB.js';
import cookieParser from 'cookie-parser';
import testRouter from './routes/testRouter.js';
import tokenMiddleware from './middlewares/tokenMiddleware.js';
import usreInfoRouter from './routes/userInfoRouter.js';

// dotenv config
config();

// express app
const app = express();
const port = process.env.port || 4001;
const password = process.env.DB_PASSWORD;

// db connect
connectDB(`mongodb+srv://mrlokidev:${password}@cluster0.amuk1tm.mongodb.net/Blog_01`, () => {
    app.listen(port, () => console.log(`server is running in port ${port}`))

})


// global middleware
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(express.json());
app.use(cookieParser())


// routes
app.use('/api/auth/', authRouter);
app.use('/api/tests/', tokenMiddleware, testRouter);
app.use('/api/user-info/', usreInfoRouter);


// Error handler
app.use(errorMiddleware)


