import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import compression from "compression";
import cors from 'cors';
import helmet from "helmet";
import mongoose from "mongoose";

import userRouter from './routes/usersRouter.js';
import businessRouter from './routes/businessRouter.js';
import orderRouter from './routes/ordersRouter.js';

import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

void (async() =>
{
  try
  {
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    const app = express();

    app.use(compression());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.use(logger);
    app.use('/api/users', userRouter);
    app.use('/api/businesses', businessRouter);
    app.use('/api/orders', orderRouter);
    app.use(errorHandler);

    const port = 8091;
    app.listen(port, () => {
      console.log(`Server listening on ${port}`);
    });
  }
  catch (error)
  {
    console.log('Error while connecting to database', error);
  }
})();
