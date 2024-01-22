import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
  
app.use(express.json())
app.use(cookieParser())

//router import
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import wishtlistRouter from "./routes/wishList.routes.js"
//Router declaration

// app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/wishtlist", wishtlistRouter);



export {app}