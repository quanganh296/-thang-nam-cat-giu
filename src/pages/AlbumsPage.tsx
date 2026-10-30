import React, { useState } from 'react';
import { Album, Photo } from '../types';
import { AlbumCard } from '../components/AlbumCard';
import { PhotoCard } from '../components/PhotoCard';

interface AlbumsPageProps {
  albums: Album[];
  photos: Photo[];
  onOpenLightbox: (photos: Photo[], index: number) => void;
  onNavigateToGallery: (albumId: string) => void;
}

export const AlbumsPage: React.FC<AlbumsPageProps> = ({
  albums,
  photos,
  onOpenLightbox,
  onNavigateToGallery
}) => {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);

  const selectedAlbum = albums.find((a) => a.id === selectedAlbumId);
  const albumPhotos = selectedAlbumId ? photos.filter((p) => p.albumId === selectedAlbumId) : [];

  return (
    <div className="albums-page" style={{ padding: '3.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Tuyển Tập Tình Yêu</span>
          <h1 className="section-title">Những Album Kỷ Niệm</h1>
          <p className="section-subtitle">
            Mỗi tập ảnh là một cuốn nhật ký thu nhỏ, cất giữ nụ cười của Em (TTLA), những ngày hẹn hò và kỷ niệm của NQA.
          </p>
        </div>

        {/* Selected Album Detail View if clicked */}
        {selectedAlbum ? (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <button
                  type="button"
                  className="btn btn-text"
                  onClick={() => setSelectedAlbumId(null)}
                  style={{ marginBottom: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  ← Trở về danh sách Album
                </button>
                <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2.2rem', color: 'var(--color-dark-charcoal)' }}>
                  {selectedAlbum.title}
                </h2>
                <p style={{ color: 'var(--color-blue-gray)', fontStyle: 'italic', maxWidth: '650px', marginTop: '0.35rem' }}>
                  {selectedAlbum.description}
                </p>
              </div>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => onNavigateToGallery(selectedAlbum.id)}
              >
                Mở trong bộ lọc Thư viện ({albumPhotos.length} ảnh)
              </button>
            </div>

            {/* Photos inside this album */}
            <div className="gallery-grid">
              {albumPhotos.map((photo, index) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onClick={() => onOpenLightbox(albumPhotos, index)}
                  styleMode="card"
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid of all albums */
          <div className="albums-grid">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                onSelect={(id) => setSelectedAlbumId(id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
