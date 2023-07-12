
import express from 'express'
import dotenv from 'dotenv'
import productRouter from './routers/product.js';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use('/',productRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});