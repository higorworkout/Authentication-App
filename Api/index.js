import express from 'express';
import userRoutes from './Routes/user.route.js';
import authRoutes from './Routes/auth.route.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

const app = express();
//json for body-parser
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// dot env config
dotenv.config();


//Conection with mongo
const connection = mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log(e);
})

//Routes config
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


app.listen(3000, () => {
    console.log("Server on port 3000!");
})

