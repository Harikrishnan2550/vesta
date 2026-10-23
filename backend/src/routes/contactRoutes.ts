import { Router } from 'express';
import { handleContactInquiry } from '../controllers/contactController';
import rateLimit from 'express-rate-limit';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    message: 'Too many requests. Please try again in a few minutes.',
  },
});

router.post('/', contactLimiter, handleContactInquiry);

export default router;
