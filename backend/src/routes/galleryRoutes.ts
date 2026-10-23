import { Router } from 'express';
import {
  getGalleryItems,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from '../controllers/galleryController';
import { requireAuth } from '../middleware/authMiddleware';
import { upload } from '../services/imageService';

const router = Router();

// Public routes
router.get('/', getGalleryItems);
router.get('/:id', getGalleryItemById);

// Protected routes (Admin only)
router.post('/', requireAuth, upload.single('image'), createGalleryItem);
router.put('/:id', requireAuth, updateGalleryItem);
router.delete('/:id', requireAuth, deleteGalleryItem);

export default router;
