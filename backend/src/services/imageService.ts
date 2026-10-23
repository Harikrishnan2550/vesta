import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';

// Ensure upload directories exist
const uploadBaseDir = path.join(__dirname, '../../uploads');
const categories = ['construction', 'crabs-fish', 'sports'];

categories.forEach((cat) => {
  const dir = path.join(uploadBaseDir, cat);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Multer Memory Storage for Sharp in-memory processing
const storage = multer.memoryStorage();

// File Filter for security (JPEG, PNG, WebP only)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and WebP images are allowed.'));
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB upload limit before compression
  },
  fileFilter,
});

export interface ProcessedImageResult {
  fileName: string;
  filePath: string;
  publicUrl: string;
  width?: number;
  height?: number;
  sizeBytes: number;
}

/**
 * Image processing service using Sharp:
 * - Resizes image to max 1920px width (maintaining aspect ratio)
 * - Converts to optimized WebP format
 * - Quality set to 82% to achieve high visual fidelity at 200-500 KB file size
 * - Saves into category-specific directory
 */
export const processAndSaveImage = async (
  fileBuffer: Buffer,
  category: 'construction' | 'crabs-fish' | 'sports',
  originalFileName: string
): Promise<ProcessedImageResult> => {
  const sanitizedCategory = categories.includes(category) ? category : 'construction';
  const targetDir = path.join(uploadBaseDir, sanitizedCategory);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const timestamp = Date.now();
  const safeName = path
    .parse(originalFileName)
    .name.replace(/[^a-zA-Z0-9_-]/g, '_')
    .toLowerCase();
  const outputFileName = `${timestamp}_${safeName}.webp`;
  const outputFilePath = path.join(targetDir, outputFileName);

  // Sharp Pipeline: Auto-orient, Resize to max 1920px width, WebP compression
  const processedBuffer = await sharp(fileBuffer)
    .rotate() // Auto-orient based on EXIF
    .resize({
      width: 1920,
      withoutEnlargement: true,
      fit: 'inside',
    })
    .webp({
      quality: 82,
      effort: 4,
    })
    .toBuffer();

  // Save to disk
  await fs.promises.writeFile(outputFilePath, processedBuffer);

  const metadata = await sharp(processedBuffer).metadata();

  const publicUrl = `/uploads/${sanitizedCategory}/${outputFileName}`;

  return {
    fileName: outputFileName,
    filePath: outputFilePath,
    publicUrl,
    width: metadata.width,
    height: metadata.height,
    sizeBytes: processedBuffer.length,
  };
};

/**
 * Delete image file safely from disk
 */
export const deleteImageFile = async (imageUrl: string): Promise<boolean> => {
  try {
    if (!imageUrl.startsWith('/uploads/')) return false;
    const relativePath = imageUrl.replace('/uploads/', '');
    const fullPath = path.join(uploadBaseDir, relativePath);

    // Prevent path traversal
    if (!fullPath.startsWith(uploadBaseDir)) {
      console.warn('Path traversal detected during image deletion:', imageUrl);
      return false;
    }

    if (fs.existsSync(fullPath)) {
      await fs.promises.unlink(fullPath);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to delete image file from disk:', error);
    return false;
  }
};
