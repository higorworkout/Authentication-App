import express from 'express';
import { signup } from '../Controlers/auth.controller.js'
const router = express.Router();


router.post('/signup', signup)


export default router;