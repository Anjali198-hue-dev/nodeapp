import express from 'express';
const userRouter = express.Router();
import { loginByPhoneNumber} from '../controller/Signup.js';

userRouter.post('/login', loginByPhoneNumber);

export default userRouter;
