import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { registerValidation, loginValidation } from './validations/auth.js'

import * as UserController from './controllers/UserController.js'

import checkAuth from './utils/checkAuth.js';
import handleValidationErrors from './utils/handleValidationErrors.js';
// import productRouter from "./routes/product-route.js";
import productRouter from "./routes/product-route.js"

const url = 'mongodb+srv://matin:wwwwww@cluster0.ulls2qz.mongodb.net/mern?retryWrites=true&w=majority'

mongoose
    .connect(url)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express()

app.use(express.json())
app.use(cors())


app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);

app.post('/auth/login', loginValidation, handleValidationErrors,  UserController.login)

app.post('/auth/me', checkAuth,UserController.getMe)


app.use('/product', productRouter)

app.use('/details/:id', productRouter)


app.listen(process.env.PORT || 7777, (err) => {
    if (err) {
      return console.log(err);
    }
  
    console.log('Server OK');
  });