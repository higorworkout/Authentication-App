import express from 'express';
import { test } from '../Controlers/user.controller.js';
import { signup } from '../Controlers/auth.controller.js'

const router = express.Router();


router.get("/", test);



export default router;