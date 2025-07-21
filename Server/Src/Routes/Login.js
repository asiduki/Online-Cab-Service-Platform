import express from 'express';
import { login, sign } from '../Controller/userController.js';
const router = express.Router();

router.post("/login", login )
router.post("/sign_up",sign)

export default router;
