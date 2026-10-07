import { GalleryItem, GalleryResponse, LoginResponse, ContactFormPayload } from '../types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Fallback seed items for instant rendering during build or offline state
const FALLBACK_ITEMS: GalleryItem[] = [
  {
    _id: 'fallback_c1',
    title: 'Commercial Corporate Hub — Kerala Central',
    category: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    altText: 'Modern commercial corporate architectural building by Vesta Future Builders',
    description: 'Multi-story commercial complex featuring modern glass facade and energy-efficient structural design.',
    isFeatured: true,
    sortOrder: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_c2',
    title: 'Luxury Residential Waterfront Villa',
    category: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    altText: 'Architectural luxury modern villa development',
    description: 'Contemporary architectural residence engineered with sustainable construction techniques.',
    isFeatured: true,
    sortOrder: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_f1',
    title: 'Modern Brackish Water Crab Aquaculture Ponds',
    category: 'crabs-fish',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    altText: 'Sustainable aquaculture crab and marine farming facility',
    description: 'Controlled salinity aquaculture facility for high-yield mud crab rearing.',
    isFeatured: true,
    sortOrder: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_f2',
    title: 'High-Density Freshwater Biofloc Fish Tanks',
    category: 'crabs-fish',
    imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop',
    altText: 'Scientific biofloc fish cultivation system',
    description: 'State-of-the-art water purification, oxygenation, and eco-friendly feeding cycles.',
    isFeatured: true,
    sortOrder: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_s1',
    title: 'Championship Multi-Sport Synthetic Turf Arena',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1529900245534-47fbf8204b61?q=80&w=1200&auto=format&fit=crop',
    altText: 'FIFA grade football and multisport synthetic turf arena',
    description: 'All-weather shock-absorbing artificial turf installation with professional drainage.',
    isFeatured: true,
    sortOrder: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'fallback_s2',
    title: 'Indoor Wooden Badminton Stadium & Court',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop',
    altText: 'Professional indoor badminton wooden court with LED lighting',
    description: 'BWF certified wooden subflooring with anti-glare sports lighting fixtures.',
    isFeatured: true,
    sortOrder: 10,
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
    return items;
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
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL.replace('/api', '')
    : 'http://localhost:5000';
  return `${baseUrl}${url}`;
}
