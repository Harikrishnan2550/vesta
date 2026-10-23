import {
  GalleryItem,
  GalleryResponse,
  LoginResponse,
  ContactFormPayload,
  ConstructionPricing,
  PricingResponse,
} from '../types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Fallback seed items for instant rendering during build or offline state
const FALLBACK_ITEMS: GalleryItem[] = [
  // Builders & Developers (Construction)
  {
    _id: 'fallback_c1',
    title: 'Commercial Corporate Hub — Kerala Central',
    category: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    altText: 'Commercial Corporate Hub — Kerala Central',
    description: 'Multi-story commercial complex featuring modern glass facade and energy-efficient structural design.',
    isFeatured: true,
    sortOrder: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_c2',
    title: 'Modern Tropical House at Dusk',
    category: 'construction',
    imageUrl: '/images/Modern Tropical House at Dusk.png',
    altText: 'Modern Tropical House at Dusk',
    description: '',
    isFeatured: true,
    sortOrder: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_c3',
    title: 'Modern Tropical Villa After Rain',
    category: 'construction',
    imageUrl: '/images/construction/Modern Tropical Villa After Rain.png',
    altText: 'Modern Tropical Villa After Rain',
    description: '',
    isFeatured: false,
    sortOrder: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_c4',
    title: 'Modern Tropical Villa at Dusk',
    category: 'construction',
    imageUrl: '/images/construction/Modern Tropical Villa at Dusk.png',
    altText: 'Modern Tropical Villa at Dusk',
    description: '',
    isFeatured: false,
    sortOrder: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Crabs & Fish Farm
  {
    _id: 'fallback_f1',
    title: 'Mud Crab Farm Under Tropical Skies',
    category: 'crabs-fish',
    imageUrl: '/images/crabs-fish/Mud Crab Farm Under Tropical Skies.png',
    altText: 'Mud Crab Farm Under Tropical Skies',
    description: '',
    isFeatured: true,
    sortOrder: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_f2',
    title: 'High-Density Freshwater Biofloc Fish Tanks',
    category: 'crabs-fish',
    imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop',
    altText: 'High-Density Freshwater Biofloc Fish Tanks',
    description: 'State-of-the-art water purification, oxygenation, and eco-friendly feeding cycles.',
    isFeatured: true,
    sortOrder: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Sports Infrastructure
  {
    _id: 'fallback_s1',
    title: 'Vivid Urban Futsal Field Panorama',
    category: 'sports',
    imageUrl: '/images/sports/Vivid Urban Futsal Field Panorama.png',
    altText: 'Vivid Urban Futsal Field Panorama',
    description: '',
    isFeatured: true,
    sortOrder: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_s2',
    title: 'Symmetrical Blue Badminton Hall',
    category: 'sports',
    imageUrl: '/images/sports/Symmetrical Blue Badminton Hall.png',
    altText: 'Symmetrical Blue Badminton Hall',
    description: '',
    isFeatured: true,
    sortOrder: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function fetchGalleryItems(category?: string, featured?: boolean): Promise<GalleryItem[]> {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (featured !== undefined) params.append('featured', String(featured));

    const res = await fetch(`${API_BASE}/gallery?${params.toString()}`, {
      next: { revalidate: 60 },
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data: GalleryResponse = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('API fetch failed, utilizing fallback demo items:', error);
    let items = [...FALLBACK_ITEMS];
    if (category && category !== 'all') {
      items = items.filter((i) => i.category === category);
    }
    if (featured !== undefined) {
      items = items.filter((i) => i.isFeatured === featured);
    }
    return items.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }
}

export async function loginAdmin(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Login failed.');
  }
  return data;
}

export async function uploadGalleryItem(
  formData: FormData,
  token: string
): Promise<{ success: boolean; message: string; data?: GalleryItem }> {
  const res = await fetch(`${API_BASE}/gallery`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Upload failed.');
  }
  return data;
}

export async function deleteGalleryItemApi(
  id: string,
  token: string
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE}/gallery/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Delete failed.');
  }
  return data;
}

export async function updateGalleryItemApi(
  id: string,
  updates: Partial<GalleryItem>,
  token: string
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE}/gallery/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Update failed.');
  }
  return data;
}

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Inquiry submission failed.');
  }
  return data;
}

export function formatImageUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  if (url.startsWith('/images/')) {
    return encodeURI(url);
  }
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL.replace('/api', '')
    : 'http://localhost:5000';
  return `${baseUrl}${url}`;
}

// Default Fallback Construction Package Rates
export const DEFAULT_CONSTRUCTION_PRICING: ConstructionPricing = {
  budgetRate: '₹1,999',
  standardRate: '₹2,199',
  premiumRate: '₹2,499',
  unit: '/ SQFT',
};

export async function fetchConstructionPricing(): Promise<ConstructionPricing> {
  try {
    const res = await fetch(`${API_BASE}/pricing`, {
      next: { revalidate: 30 },
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch pricing: ${res.statusText}`);
    }
    const data: PricingResponse = await res.json();
    return data.data || DEFAULT_CONSTRUCTION_PRICING;
  } catch (error) {
    console.warn('Pricing API fetch failed, utilizing default rates:', error);
    return DEFAULT_CONSTRUCTION_PRICING;
  }
}

export async function updateConstructionPricingApi(
  pricing: Partial<ConstructionPricing>,
  token: string
): Promise<{ success: boolean; message: string; data?: ConstructionPricing }> {
  const res = await fetch(`${API_BASE}/pricing`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(pricing),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to update construction package pricing.');
  }
  return data;
}
