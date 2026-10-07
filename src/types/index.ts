export type GalleryCategory = 'construction' | 'crabs-fish' | 'sports';

export interface GalleryItem {
  _id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  altText: string;
  description?: string;
  isFeatured?: boolean;
  sortOrder?: number;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  totalPages: number;
  data: GalleryItem[];
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  lastLogin?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  admin?: AdminUser;
}

export interface ContactFormPayload {
  name: string;
  email?: string;
  phone?: string;
  division?: string;
  message: string;
}
