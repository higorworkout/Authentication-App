import User from '../db/models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hash = bcryptjs.hashSync(password, 10);
    const newUser  = new User({ username, email, password: hash });
    try {
        await newUser.save()
        res.status(201).json({ message: "User created successfully." });
    }catch(e) {
        next(errorHandler(500, e));
    }
}