import express from 'express';
import { config } from 'dotenv'
import cors from 'cors'
import multer from 'multer';
import authRouter from './routes/authRouter.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDB from './connectDB.js';
import cookieParser from 'cookie-parser';
import testRouter from './routes/testRouter.js';
import tokenMiddleware from './middlewares/tokenMiddleware.js';
import usreInfoRouter from './routes/userInfoRouter.js';
import postRouter from './routes/postRouter.js';


// config multer
const upload = multer();

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
app.use(cookieParser());
app.use(upload.none())


// routes
app.use('/api/auth/', authRouter);
app.use('/api/tests/', tokenMiddleware, testRouter);
app.use('/api/user-info/', usreInfoRouter);
app.use('/api/posts', postRouter)


// Error handler
app.use(errorMiddleware)


