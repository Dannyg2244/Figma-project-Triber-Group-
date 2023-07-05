import express from 'express';
import  registerUser  from '../controller/userController.js';

const router = express();

router.post('/register', registerUser);

export default router;