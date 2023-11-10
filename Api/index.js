import express from 'express';
import dotenv from 'dotenv'
const app = express();
dotenv.config();

//Conection with mongo
import mongoose from 'mongoose';

 mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log(e);
})




app.get("/", (req, res) => {
    res.send("Welcome to backend")
});

app.listen(3000, () => {
    console.log("Server on port 3000!");
})