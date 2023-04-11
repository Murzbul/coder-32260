import config from './config.js';
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: config.nodeEnv === 'development' ? 'http://localhost:63342' : 'https://my.example.com',
  // origin: 'http://localhost:63343',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/test', (req, res) => {
  res.send({ message: 'My Response' });
});

app.listen(8087, () => console.log('Listening 8087 port'));
