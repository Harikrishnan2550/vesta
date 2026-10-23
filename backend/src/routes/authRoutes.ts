import { Router } from 'express';
import { login, getMe } from '../controllers/authController';
import { requireAuth } from '../middleware/authMiddleware';
import rateLimit from 'express-rate-limit';

const router = Router();

// Strict rate limit on auth endpoint (5 attempts per 15 minutes)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many login attempts. Please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/login', loginLimiter, login);
router.get('/me', requireAuth, getMe);

export default router;
