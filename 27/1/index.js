import mongoose from 'mongoose';

class MongoSingleton
{
  static #instance;

  constructor()
  {
    // mongoose.connect('URL');
    console.log('mongoose.connect');
  }

  static getInstance()
  {
    if (MongoSingleton.#instance)
    {
      console.log('Already connected');
      return MongoSingleton.#instance;
    }
    MongoSingleton.#instance = new MongoSingleton();
    console.log('Connected');
    return MongoSingleton.#instance;
  }
}

const mongoInstance1 = MongoSingleton.getInstance();
const mongoInstance2 = MongoSingleton.getInstance();
