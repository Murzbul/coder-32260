import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRoute from './routes/usersRoute.js';
import mongoose from "mongoose";

async function main()
{
  try
  {
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/users',userRoute);

    app.listen(8085, () => {
      console.log('Server listening on 8085');
    });

  }
  catch (e)
  {
    console.log(e);
  }
}


main();
