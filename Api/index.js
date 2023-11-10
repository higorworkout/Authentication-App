// Express config
import express from 'express';
const app = express();

// dot env config
import dotenv from 'dotenv'
dotenv.config();

//Conection with mongo
import mongoose from 'mongoose';

const connection = mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log(e);
})

//Routes config
import userRoutes from './Routes/user.route.js';
app.use("/api/user", userRoutes);


app.listen(3000, () => {
    console.log("Server on port 3000!");
})

