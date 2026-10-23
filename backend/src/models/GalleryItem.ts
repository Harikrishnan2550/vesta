import mongoose, { Document, Schema } from 'mongoose';

export type GalleryCategory = 'construction' | 'crabs-fish' | 'sports';

export interface IGalleryItem extends Document {
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  altText: string;
  description?: string;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryItemSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ['construction', 'crabs-fish', 'sports'],
      required: true,
      index: true,
    },
    imageUrl: { type: String, required: true },
    altText: { type: String, default: '' },
    description: { type: String, default: '' },
    isFeatured: { type: Boolean, default: false },
    sortOrder: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const GalleryItemModel = mongoose.model<IGalleryItem>(
  'GalleryItem',
  GalleryItemSchema
);
