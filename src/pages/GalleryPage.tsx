import React, { useState, useMemo } from 'react';
import { Photo, Album } from '../types';
import { PhotoCard } from '../components/PhotoCard';

interface GalleryPageProps {
  photos: Photo[];
  albums: Album[];
  initialAlbumId?: string;
  onOpenLightbox: (filteredPhotos: Photo[], index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  photos,
  albums,
  initialAlbumId = 'all',
  onOpenLightbox
}) => {
  const [selectedAlbum, setSelectedAlbum] = useState<string>(initialAlbumId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    photos.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, [photos]);

  // Filter photos based on album, tag, search query
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      // Album filter
      if (selectedAlbum !== 'all' && photo.albumId !== selectedAlbum) {
        return false;
      }
      // Tag filter
      if (selectedTag !== 'all' && !photo.tags.includes(selectedTag)) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = photo.title.toLowerCase().includes(q);
        const matchesCaption = photo.caption.toLowerCase().includes(q);
        const matchesLocation = photo.location.toLowerCase().includes(q);
        const matchesFilm = photo.filmStock ? photo.filmStock.toLowerCase().includes(q) : false;
        return matchesTitle || matchesCaption || matchesLocation || matchesFilm;
      }
      return true;
    });
  }, [photos, selectedAlbum, selectedTag, searchQuery]);

  const resetFilters = () => {
    setSelectedAlbum('all');
    setSelectedTag('all');
    setSearchQuery('');
  };

  return (
    <div className="gallery-page" style={{ padding: '3.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Thư Viện Ảnh</span>
          <h1 className="section-title">Kho Lưu Giữ Kỷ Niệm</h1>
          <p className="section-subtitle">
            Từng bức hình là một lát cắt thời gian được ngưng đọng trên từng vệt sáng và thước film hoài niệm.
          </p>
        </div>

        {/* Toolbar */}
        <div className="gallery-toolbar">
          <div className="filter-pills" role="tablist" aria-label="Bộ lọc album">
            <button
              type="button"
              className={`filter-pill ${selectedAlbum === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedAlbum('all')}
            >
              Tất cả ({photos.length})
            </button>
            {albums.map((album) => (
              <button
                key={album.id}
                type="button"
                className={`filter-pill ${selectedAlbum === album.id ? 'active' : ''}`}
                onClick={() => setSelectedAlbum(album.id)}
              >
                {album.title}
              </button>
            ))}
          </div>

          <div className="gallery-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', color: '#737B83' }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Tìm theo địa điểm, tựa đề, film..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Tìm kiếm ảnh"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ color: '#737B83', padding: '0 0.25rem' }}
                aria-label="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tag Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-blue-gray)', fontWeight: 600 }}>Chủ đề:</span>
          <button
            type="button"
            className={`filter-pill ${selectedTag === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTag('all')}
            style={{ fontSize: '0.78rem', padding: '0.25rem 0.75rem' }}
          >
            Tất cả
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`filter-pill ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
              style={{ fontSize: '0.78rem', padding: '0.25rem 0.75rem' }}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div style={{ fontSize: '0.9rem', color: 'var(--color-blue-gray)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Đang hiển thị <strong>{filteredPhotos.length}</strong> / {photos.length} bức ảnh</span>
          {(selectedAlbum !== 'all' || selectedTag !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={resetFilters}
              style={{ fontSize: '0.85rem', color: 'var(--color-warm-brown)', textDecoration: 'underline' }}
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>

        {/* Photos Grid or Empty State */}
        {filteredPhotos.length > 0 ? (
          <div className="gallery-grid">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => onOpenLightbox(filteredPhotos, index)}
                styleMode="card"
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg className="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="9" x2="15" y2="15" />
              <line x1="15" y1="9" x2="9" y2="15" />
            </svg>
            <h3 className="empty-state-title">Không tìm thấy bức ảnh nào</h3>
            <p className="empty-state-text">
              Không có bức ảnh nào khớp với từ khóa tìm kiếm hoặc bộ lọc hiện tại. Hãy thử tìm với từ khóa khác nhé.
            </p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={resetFilters}
            >
              Xem toàn bộ thư viện
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
