import mongoose from 'mongoose';
import { GalleryItemModel, IGalleryItem, GalleryCategory } from '../models/GalleryItem';
import { AdminUserModel, IAdminUser } from '../models/AdminUser';
import { ConstructionPricingModel, IConstructionPricing } from '../models/ConstructionPricing';
import bcrypt from 'bcryptjs';

// In-Memory fallback store
export interface MemoryGalleryItem {
  _id: string;
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

export interface MemoryAdminUser {
  _id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemoryConstructionPricing {
  key: string;
  budgetRate: string;
  standardRate: string;
  premiumRate: string;
  unit: string;
  createdAt: Date;
  updatedAt: Date;
}

let inMemoryGallery: MemoryGalleryItem[] = [];
let inMemoryAdmins: MemoryAdminUser[] = [];
let inMemoryPricing: MemoryConstructionPricing = {
  key: 'construction_packages',
  budgetRate: '₹1,999',
  standardRate: '₹2,199',
  premiumRate: '₹2,499',
  unit: '/ SQFT',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const isMongoConnected = (): boolean => {
  return mongoose.connection.readyState === 1;
};

export const StoreService = {
  // --- ADMIN USERS ---
  async findAdminByEmail(email: string): Promise<IAdminUser | MemoryAdminUser | null> {
    if (isMongoConnected()) {
      return await AdminUserModel.findOne({ email: email.toLowerCase() });
    }
    const admin = inMemoryAdmins.find((a) => a.email.toLowerCase() === email.toLowerCase());
    return admin || null;
  },

  async createAdmin(
    email: string,
    passwordHash: string,
    name: string = 'Vesta Admin'
  ): Promise<any> {
    if (isMongoConnected()) {
      return await AdminUserModel.create({ email: email.toLowerCase(), passwordHash, name });
    }
    const newAdmin: MemoryAdminUser = {
      _id: `admin_${Date.now()}`,
      email: email.toLowerCase(),
      passwordHash,
      name,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    inMemoryAdmins.push(newAdmin);
    return newAdmin;
  },

  async updateAdminLastLogin(id: string): Promise<void> {
    if (isMongoConnected()) {
      await AdminUserModel.findByIdAndUpdate(id, { lastLogin: new Date() });
      return;
    }
    const admin = inMemoryAdmins.find((a) => a._id === id);
    if (admin) admin.lastLogin = new Date();
  },

  // --- GALLERY ITEMS ---
  async getGalleryItems(options: {
    category?: string;
    isFeatured?: boolean;
    limit?: number;
    page?: number;
  }): Promise<{ items: any[]; total: number }> {
    const { category, isFeatured, limit = 50, page = 1 } = options;

    if (isMongoConnected()) {
      const query: any = {};
      if (category && category !== 'all') query.category = category;
      if (isFeatured !== undefined) query.isFeatured = isFeatured;

      const skip = (page - 1) * limit;
      const total = await GalleryItemModel.countDocuments(query);
      const items = await GalleryItemModel.find(query)
        .sort({ sortOrder: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit);

      return { items, total };
    }

    let filtered = [...inMemoryGallery];
    if (category && category !== 'all') {
      filtered = filtered.filter((i) => i.category === category);
    }
    if (isFeatured !== undefined) {
      filtered = filtered.filter((i) => i.isFeatured === isFeatured);
    }

    filtered.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
    const total = filtered.length;
    const skip = (page - 1) * limit;
    const items = filtered.slice(skip, skip + limit);

    return { items, total };
  },

  async getGalleryItemById(id: string): Promise<any | null> {
    if (isMongoConnected()) {
      return await GalleryItemModel.findById(id);
    }
    return inMemoryGallery.find((i) => i._id === id) || null;
  },

  async createGalleryItem(data: {
    title: string;
    category: GalleryCategory;
    imageUrl: string;
    altText?: string;
    description?: string;
    isFeatured?: boolean;
    sortOrder?: number;
  }): Promise<any> {
    if (isMongoConnected()) {
      return await GalleryItemModel.create(data);
    }
    const newItem: MemoryGalleryItem = {
      _id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      title: data.title,
      category: data.category,
      imageUrl: data.imageUrl,
      altText: data.altText || data.title,
      description: data.description || '',
      isFeatured: data.isFeatured ?? false,
      sortOrder: data.sortOrder ?? 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    inMemoryGallery.unshift(newItem);
    return newItem;
  },

  async updateGalleryItem(
    id: string,
    updates: Partial<{
      title: string;
      category: GalleryCategory;
      altText: string;
      description: string;
      isFeatured: boolean;
      sortOrder: number;
    }>
  ): Promise<any | null> {
    if (isMongoConnected()) {
      return await GalleryItemModel.findByIdAndUpdate(id, updates, { new: true });
    }
    const index = inMemoryGallery.findIndex((i) => i._id === id);
    if (index === -1) return null;
    inMemoryGallery[index] = {
      ...inMemoryGallery[index],
      ...updates,
      updatedAt: new Date(),
    };
    return inMemoryGallery[index];
  },

  async deleteGalleryItem(id: string): Promise<boolean> {
    if (isMongoConnected()) {
      const res = await GalleryItemModel.findByIdAndDelete(id);
      return !!res;
    }
    const initialLen = inMemoryGallery.length;
    inMemoryGallery = inMemoryGallery.filter((i) => i._id !== id);
    return inMemoryGallery.length < initialLen;
  },

  async countGallery(): Promise<number> {
    if (isMongoConnected()) {
      return await GalleryItemModel.countDocuments();
    }
    return inMemoryGallery.length;
  },

  // --- CONSTRUCTION PRICING ---
  async getConstructionPricing(): Promise<IConstructionPricing | MemoryConstructionPricing> {
    if (isMongoConnected()) {
      let pricing = await ConstructionPricingModel.findOne({ key: 'construction_packages' });
      if (!pricing) {
        pricing = await ConstructionPricingModel.create({
          key: 'construction_packages',
          budgetRate: '₹1,999',
          standardRate: '₹2,199',
          premiumRate: '₹2,499',
          unit: '/ SQFT',
        });
      }
      return pricing;
    }
    return inMemoryPricing;
  },

  async updateConstructionPricing(updates: {
    budgetRate?: string;
    standardRate?: string;
    premiumRate?: string;
    unit?: string;
  }): Promise<IConstructionPricing | MemoryConstructionPricing> {
    if (isMongoConnected()) {
      const updated = await ConstructionPricingModel.findOneAndUpdate(
        { key: 'construction_packages' },
        { $set: updates },
        { new: true, upsert: true }
      );
      return updated;
    }

    inMemoryPricing = {
      ...inMemoryPricing,
      ...updates,
      updatedAt: new Date(),
    };
    return inMemoryPricing;
  },
};
