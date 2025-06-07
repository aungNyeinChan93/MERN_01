import express from 'express';
import { config } from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRouter.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDB from './connectDB.js';
import bcrypt from 'bcrypt'

// dotenv config
config();
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


// routes
app.use('/api/auth/', authRouter);


// Error handler
app.use(errorMiddleware)


