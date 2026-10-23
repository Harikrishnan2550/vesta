import { Router } from 'express';
import {
  getConstructionPricing,
  updateConstructionPricing,
} from '../controllers/pricingController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

// Public route to fetch current active rates
router.get('/', getConstructionPricing);

// Protected route for Admin to update rates
router.put('/', requireAuth, updateConstructionPricing);

export default router;
