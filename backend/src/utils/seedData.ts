import bcrypt from 'bcryptjs';
import { StoreService } from '../services/storeService';

export const seedInitialData = async (): Promise<void> => {
  try {
    // 1. Seed Admin User
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@vestafuture.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'VestaAdmin@2026!';
    const adminName = process.env.ADMIN_NAME || 'Vesta Administrator';

    const existingAdmin = await StoreService.findAdminByEmail(adminEmail);
    if (!existingAdmin) {
      const passwordHash = await bcrypt.hash(adminPassword, 12);
      await StoreService.createAdmin(adminEmail, passwordHash, adminName);
      console.log(`[Seed] Created default Admin User: ${adminEmail}`);
    }

    // 2. Seed Initial Gallery Portfolio Items if empty
    const currentCount = await StoreService.countGallery();
    if (currentCount === 0) {
      const initialGallery = [
        // Construction Division
        {
          title: 'Commercial Corporate Hub — Kerala Central',
          category: 'construction' as const,
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          altText: 'Commercial Corporate Hub — Kerala Central',
          description: 'Multi-story commercial complex featuring modern glass facade and energy-efficient structural design.',
          isFeatured: true,
          sortOrder: 1,
        },
        {
          title: 'Modern Tropical House at Dusk',
          category: 'construction' as const,
          imageUrl: '/images/Modern Tropical House at Dusk.png',
          altText: 'Modern Tropical House at Dusk',
          description: '',
          isFeatured: true,
          sortOrder: 2,
        },
        {
          title: 'Modern Tropical Villa After Rain',
          category: 'construction' as const,
          imageUrl: '/images/construction/Modern Tropical Villa After Rain.png',
          altText: 'Modern Tropical Villa After Rain',
          description: '',
          isFeatured: false,
          sortOrder: 7,
        },
        {
          title: 'Modern Tropical Villa at Dusk',
          category: 'construction' as const,
          imageUrl: '/images/construction/Modern Tropical Villa at Dusk.png',
          altText: 'Modern Tropical Villa at Dusk',
          description: '',
          isFeatured: false,
          sortOrder: 8,
        },

        // Crabs & Fish Farming Division
        {
          title: 'Mud Crab Farm Under Tropical Skies',
          category: 'crabs-fish' as const,
          imageUrl: '/images/crabs-fish/Mud Crab Farm Under Tropical Skies.png',
          altText: 'Mud Crab Farm Under Tropical Skies',
          description: '',
          isFeatured: true,
          sortOrder: 3,
        },
        {
          title: 'High-Density Freshwater Biofloc Fish Tanks',
          category: 'crabs-fish' as const,
          imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop',
          altText: 'High-Density Freshwater Biofloc Fish Tanks',
          description: 'State-of-the-art water purification, oxygenation, and eco-friendly feeding cycles.',
          isFeatured: true,
          sortOrder: 4,
        },

        // Sports Infrastructure Division
        {
          title: 'Vivid Urban Futsal Field Panorama',
          category: 'sports' as const,
          imageUrl: '/images/sports/Vivid Urban Futsal Field Panorama.png',
          altText: 'Vivid Urban Futsal Field Panorama',
          description: '',
          isFeatured: true,
          sortOrder: 5,
        },
        {
          title: 'Symmetrical Blue Badminton Hall',
          category: 'sports' as const,
          imageUrl: '/images/sports/Symmetrical Blue Badminton Hall.png',
          altText: 'Symmetrical Blue Badminton Hall',
          description: '',
          isFeatured: true,
          sortOrder: 6,
        },
      ];

      for (const item of initialGallery) {
        await StoreService.createGalleryItem(item);
      }
      console.log(`[Seed] Loaded ${initialGallery.length} initial gallery showcases across 3 divisions.`);
    }
  } catch (error) {
    console.error('Error seeding initial data:', error);
  }
};
