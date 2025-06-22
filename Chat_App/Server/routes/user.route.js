import express from 'express'
import { logout, signup } from '../controllers/user.controller.js';
import { login } from '../controllers/user.controller.js';
import { getUserProfile } from '../controllers/user.controller.js';
// import secureRoute from '../middlewares/secureRoute.js';
import secureRoute from '../middlewares/secureRoute.js';


const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.get('/getUserProfile', secureRoute, getUserProfile)

export default router;