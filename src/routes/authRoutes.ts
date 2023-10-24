import express, { Router } from "express";
const router:Router = express.Router();

// import controllers
import * as authControllers from "../controllers/authControllers.js";

router.route('/auth/login').post(authControllers.loginUser);
router.route('/auth/register').post(authControllers.registerUser);

export default router;