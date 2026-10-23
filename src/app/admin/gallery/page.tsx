'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GalleryItem, GalleryCategory } from '@/types';
import {
  fetchGalleryItems,
  uploadGalleryItem,
  deleteGalleryItemApi,
  updateGalleryItemApi,
  formatImageUrl,
} from '@/lib/api';
import {
  Upload,
  Trash2,
  Edit,
  Plus,
  LogOut,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Filter,
  Eye,
  ShieldCheck,
  Building2,
  Fish,
  Trophy,
  X,
} from 'lucide-react';

export default function AdminGalleryPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Upload Form Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<GalleryCategory>('construction');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadAltText, setUploadAltText] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Edit Modal State
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState<GalleryCategory>('construction');
  const [editDescription, setEditDescription] = useState('');
  const [editLoading, setEditLoading] = useState(false);

  // Auth Guard
  useEffect(() => {
    const storedToken = localStorage.getItem('vesta_admin_token');
    if (!storedToken) {
      router.push('/admin/login');
      return;
    }
    setToken(storedToken);

    const storedUser = localStorage.getItem('vesta_admin_user');
    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch (e) {}
    }

    loadItems();
  }, [router]);

  const loadItems = async () => {
    setLoading(true);
    try {
      const data = await fetchGalleryItems();
      setItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('vesta_admin_token');
    localStorage.removeItem('vesta_admin_user');
    router.push('/admin/login');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile || !uploadTitle || !token) {
      setMessage({ type: 'error', text: 'Please provide an image file and title.' });
      return;
    }

    setUploadLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('image', uploadFile);
    formData.append('title', uploadTitle);
    formData.append('category', uploadCategory);
    formData.append('description', uploadDescription);
    formData.append('altText', uploadAltText || uploadTitle);

    try {
      await uploadGalleryItem(formData, token);
      setMessage({
        type: 'success',
        text: 'Image uploaded and optimized to 1920px WebP successfully!',
      });
      setUploadTitle('');
      setUploadDescription('');
      setUploadAltText('');
      setUploadFile(null);
      setFilePreview(null);
      setIsUploadModalOpen(false);
      await loadItems();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Upload failed.' });
    } finally {
      setUploadLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item? This action will remove the image file from server storage.')) {
      return;
    }
    if (!token) return;

    try {
      await deleteGalleryItemApi(id, token);
      setMessage({ type: 'success', text: 'Gallery item deleted successfully.' });
      setItems(items.filter((i) => i._id !== id));
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to delete.' });
    }
  };

  const handleOpenEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setEditTitle(item.title);
    setEditCategory(item.category);
    setEditDescription(item.description || '');
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem || !token) return;

    setEditLoading(true);
    try {
      await updateGalleryItemApi(
        editingItem._id,
        {
          title: editTitle,
          category: editCategory,
          description: editDescription,
        },
        token
      );
      setMessage({ type: 'success', text: 'Gallery item metadata updated successfully.' });
      setEditingItem(null);
      await loadItems();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Update failed.' });
    } finally {
      setEditLoading(false);
    }
  };

  // Stats calculation
  const totalCount = items.length;
  const constructionCount = items.filter((i) => i.category === 'construction').length;
  const crabsFishCount = items.filter((i) => i.category === 'crabs-fish').length;
  const sportsCount = items.filter((i) => i.category === 'sports').length;

  const filteredItems =
    filterCategory === 'all'
      ? items
      : items.filter((i) => i.category === filterCategory);

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Admin Header */}
      <div
        style={{
          backgroundColor: '#121214',
          color: '#FFFFFF',
          padding: '28px 0',
          borderBottom: '1px solid rgba(245, 166, 35, 0.3)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--gold-primary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              <ShieldCheck size={16} />
              Vesta Future Group Dashboard
            </div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px' }}>
              Dynamic Media &amp; Gallery Management
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="btn btn-primary btn-sm"
            >
              <Plus size={16} />
              Upload New Image
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-outline-light btn-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Alerts */}
        {message && (
          <div
            style={{
              padding: '14px 20px',
              borderRadius: '8px',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: message.type === 'success' ? '#ECFDF5' : '#FEF2F2',
              color: message.type === 'success' ? '#065F46' : '#991B1B',
              border: `1px solid ${message.type === 'success' ? '#10B981' : '#EF4444'}`,
            }}
          >
            {message.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{message.text}</span>
          </div>
        )}

        {/* Live Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>
              Total Gallery Media
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-dark-primary)', marginTop: '4px' }}>
              {totalCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', marginTop: '4px', fontWeight: 600 }}>
              Sharp WebP Optimized
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Building2 size={16} color="var(--gold-primary)" />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>
                Construction
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-dark-primary)', marginTop: '4px' }}>
              {constructionCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', marginTop: '4px' }}>
              Builders &amp; Developers
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Fish size={16} color="var(--seagull-blue)" />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>
                Crabs &amp; Fish
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-dark-primary)', marginTop: '4px' }}>
              {crabsFishCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', marginTop: '4px' }}>
              The Seagull Farm
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={16} color="var(--gold-primary)" />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>
                Sports Infra
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-dark-primary)', marginTop: '4px' }}>
              {sportsCount}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', marginTop: '4px' }}>
              Turfs, Arenas &amp; Courts
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '16px 24px',
            borderRadius: '10px',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Filter size={18} color="var(--text-dark-muted)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Filter by Division:
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { label: 'All Media', value: 'all' },
              { label: 'Construction', value: 'construction' },
              { label: 'Crabs & Fish', value: 'crabs-fish' },
              { label: 'Sports', value: 'sports' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilterCategory(tab.value)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: filterCategory === tab.value ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                  backgroundColor: filterCategory === tab.value ? 'var(--gold-primary)' : '#FFFFFF',
                  color: filterCategory === tab.value ? '#121214' : 'var(--text-dark-primary)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Items Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px' }}>Loading media records...</div>
        ) : filteredItems.length === 0 ? (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '60px 20px',
              textAlign: 'center',
              borderRadius: '12px',
              border: '1px dashed var(--border-light)',
            }}
          >
            <ImageIcon size={48} color="var(--gold-primary)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No media items found</h3>
            <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
              Upload your first high-resolution photo to populate this division.
            </p>
            <button onClick={() => setIsUploadModalOpen(true)} className="btn btn-primary btn-sm">
              <Plus size={16} /> Upload Image
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item._id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#121214' }}>
                  <Image
                    src={formatImageUrl(item.imageUrl)}
                    alt={item.altText || item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span className="badge-dark" style={{ fontSize: '0.65rem' }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h4>
                  {item.description && (
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-dark-secondary)',
                        lineHeight: '1.5',
                        marginBottom: '16px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.description}
                    </p>
                  )}

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="btn btn-outline-dark btn-sm"
                      style={{ padding: '6px 12px', fontSize: '0.72rem' }}
                    >
                      <Edit size={13} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      style={{
                        backgroundColor: '#FEF2F2',
                        color: '#DC2626',
                        border: '1px solid #FCA5A5',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Trash2 size={13} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Image Modal */}
      {isUploadModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              maxWidth: '560px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Upload Image to Gallery</h3>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Select Division Category *
                </label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value as GalleryCategory)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                  }}
                >
                  <option value="construction">Construction (Builders &amp; Developers)</option>
                  <option value="crabs-fish">Crabs &amp; Fish (The Seagull Aquaculture)</option>
                  <option value="sports">Sports Infrastructure (Turfs &amp; Arenas)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Image Title *
                </label>
                <input
                  type="text"
                  required
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g. Commercial Complex Foundation"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Description (Optional)
                </label>
                <textarea
                  rows={3}
                  value={uploadDescription}
                  onChange={(e) => setUploadDescription(e.target.value)}
                  placeholder="Brief description of the project or facility..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Select Image File (JPEG, PNG, WebP) *
                </label>
                <input
                  type="file"
                  required
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleFileChange}
                  style={{ fontSize: '0.85rem' }}
                />
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', marginTop: '4px' }}>
                  Automatic Sharp pipeline will optimize and resize to max 1920px WebP.
                </p>
              </div>

              {filePreview && (
                <div style={{ position: 'relative', height: '180px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src={filePreview} alt="Preview" fill style={{ objectFit: 'cover' }} />
                </div>
              )}

              <button
                type="submit"
                disabled={uploadLoading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '12px' }}
              >
                <Upload size={16} />
                {uploadLoading ? 'Optimizing & Uploading...' : 'Upload Image'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Metadata Modal */}
      {editingItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              maxWidth: '520px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Edit Gallery Item</h3>
              <button
                onClick={() => setEditingItem(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Division Category
                </label>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value as GalleryCategory)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                  }}
                >
                  <option value="construction">Construction</option>
                  <option value="crabs-fish">Crabs &amp; Fish</option>
                  <option value="sports">Sports Infrastructure</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={editLoading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '12px' }}
              >
                {editLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
