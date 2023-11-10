import express from 'express';
import { test } from '../Controlers/user.controller.js';

const router = express.Router();


router.get("/", test);


export default router;