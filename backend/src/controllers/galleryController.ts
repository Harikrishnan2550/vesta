import { Request, Response } from 'express';
import { StoreService } from '../services/storeService';
import { processAndSaveImage, deleteImageFile } from '../services/imageService';
import { GalleryCategory } from '../models/GalleryItem';

// Public GET /api/gallery
export const getGalleryItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, featured, page, limit } = req.query;

    const isFeatured = featured === 'true' ? true : featured === 'false' ? false : undefined;
    const pageNum = page ? parseInt(page as string, 10) : 1;
    const limitNum = limit ? parseInt(limit as string, 10) : 50;

    const { items, total } = await StoreService.getGalleryItems({
      category: category as string,
      isFeatured,
      page: pageNum,
      limit: limitNum,
    });

    res.status(200).json({
      success: true,
      count: items.length,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      data: items,
    });
  } catch (error: any) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery items.',
    });
  }
};

// Public GET /api/gallery/:id
export const getGalleryItemById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const item = await StoreService.getGalleryItemById(id);

    if (!item) {
      res.status(404).json({
        success: false,
        message: 'Gallery item not found.',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery item.',
    });
  }
};

// Protected POST /api/gallery (Upload Image + Metadata)
export const createGalleryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, category, altText, description, isFeatured, sortOrder } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({
        success: false,
        message: 'Image file is required for gallery upload.',
      });
      return;
    }

    if (!title || !category) {
      res.status(400).json({
        success: false,
        message: 'Title and category are required.',
      });
      return;
    }

    const validCategories = ['construction', 'crabs-fish', 'sports'];
    if (!validCategories.includes(category)) {
      res.status(400).json({
        success: false,
        message: `Invalid category. Must be one of: ${validCategories.join(', ')}`,
      });
      return;
    }

    // Validate max 6 featured items on Home Page
    const willBeFeatured = isFeatured === 'true' || isFeatured === true;
    if (willBeFeatured) {
      const { total: currentFeaturedCount } = await StoreService.getGalleryItems({ isFeatured: true });
      if (currentFeaturedCount >= 6) {
        res.status(400).json({
          success: false,
          message: 'Limit reached: Maximum 6 images can be featured on the Home Page gallery. Please remove an existing image from the home page first.',
        });
        return;
      }
    }

    // Process image via Sharp
    const processed = await processAndSaveImage(
      file.buffer,
      category as GalleryCategory,
      file.originalname
    );

    // Save metadata
    const newItem = await StoreService.createGalleryItem({
      title,
      category: category as GalleryCategory,
      imageUrl: processed.publicUrl,
      altText: altText || title,
      description: description || '',
      isFeatured: willBeFeatured,
      sortOrder: sortOrder ? parseInt(sortOrder, 10) : 0,
    });

    res.status(201).json({
      success: true,
      message: 'Gallery item uploaded and optimized successfully.',
      data: newItem,
    });
  } catch (error: any) {
    console.error('Error creating gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process and create gallery item.',
    });
  }
};

// Protected PUT /api/gallery/:id (Update Metadata)
export const updateGalleryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, category, altText, description, isFeatured, sortOrder } = req.body;

    const existing = await StoreService.getGalleryItemById(id);
    if (!existing) {
      res.status(404).json({
        success: false,
        message: 'Gallery item not found.',
      });
      return;
    }

    const updates: any = {};
    if (title !== undefined) updates.title = title;
    if (category !== undefined) updates.category = category;
    if (altText !== undefined) updates.altText = altText;
    if (description !== undefined) updates.description = description;

    if (isFeatured !== undefined) {
      const targetFeatured = isFeatured === 'true' || isFeatured === true;
      // If setting to true and it wasn't already featured, check the 6 item limit
      if (targetFeatured && !existing.isFeatured) {
        const { total: currentFeaturedCount } = await StoreService.getGalleryItems({ isFeatured: true });
        if (currentFeaturedCount >= 6) {
          res.status(400).json({
            success: false,
            message: 'Limit reached: Maximum 6 images can be featured on the Home Page gallery. Please remove an existing image from the home page first.',
          });
          return;
        }
      }
      updates.isFeatured = targetFeatured;
    }

    if (sortOrder !== undefined) updates.sortOrder = parseInt(sortOrder, 10);

    const updatedItem = await StoreService.updateGalleryItem(id, updates);

    if (!updatedItem) {
      res.status(404).json({
        success: false,
        message: 'Gallery item not found.',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Gallery item updated successfully.',
      data: updatedItem,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update gallery item.',
    });
  }
};

// Protected DELETE /api/gallery/:id (Delete Item + Unlink File)
export const deleteGalleryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const existing = await StoreService.getGalleryItemById(id);

    if (!existing) {
      res.status(404).json({
        success: false,
        message: 'Gallery item not found.',
      });
      return;
    }

    // Delete file from disk
    if (existing.imageUrl) {
      await deleteImageFile(existing.imageUrl);
    }

    // Delete record from DB
    await StoreService.deleteGalleryItem(id);

    res.status(200).json({
      success: true,
      message: 'Gallery item and media file deleted successfully.',
    });
  } catch (error: any) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete gallery item.',
    });
  }
};
