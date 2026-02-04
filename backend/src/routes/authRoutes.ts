import { Router } from 'express';
import { signUp, signIn, google } from '../controllers/authController';

const authRoutes = Router();


authRoutes.post('/signup', signUp);

authRoutes.post('/signin', signIn);

authRoutes.post('/google', google);

export default authRoutes;