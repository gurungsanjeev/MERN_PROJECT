import express from "express";
import { signup, login, logout, getUserProfile } from "../Controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
// import { login } from "../Controller/user.controller.js";


const router = express.Router();


router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.get('/getUserProfile', secureRoute, getUserProfile);



export default router;
