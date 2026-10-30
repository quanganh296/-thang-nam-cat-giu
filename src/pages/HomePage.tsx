import React from 'react';
import { Album, Photo, JournalEntry, NavigationTab } from '../types';
import { AlbumCard } from '../components/AlbumCard';
import { PhotoCard } from '../components/PhotoCard';

interface HomePageProps {
  albums: Album[];
  photos: Photo[];
  journals: JournalEntry[];
  onNavigate: (tab: NavigationTab) => void;
  onSelectAlbum: (albumId: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  albums,
  photos,
  journals,
  onNavigate,
  onSelectAlbum,
  onOpenLightbox
}) => {
  const featuredPhotos = photos.filter((p) => p.featured).slice(0, 4);
  const heroPhoto = photos[0];
  const latestJournal = journals[0];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🎞️</span>
              <span>Ký ức & Ảnh film</span>
            </div>
            
            <h1 className="hero-title">
              Cất giữ những <em>khoảnh khắc</em> đã qua
            </h1>

            <p className="hero-quote">
              “Có những tháng năm, ta muốn cất giữ bằng những bức ảnh.”
            </p>

            <p className="hero-description">
              Không gian lưu lại những ngày bình yên, cuộn film hoài niệm, tách cà phê sớm mai và những mẩu chuyện không tên giữa dòng đời hối hả.
            </p>

            <div className="hero-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onNavigate('albums')}
              >
                <span>Khám phá album</span>
                <span>→</span>
              </button>

              <button 
                type="button" 
                className="btn btn-outline"
                onClick={() => onNavigate('timeline')}
              >
                <span>Dòng thời gian</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-polaroid-stack">
              <div className="polaroid-back-1" />
              <div className="polaroid-front">
                <PhotoCard
                  photo={heroPhoto}
                  onClick={() => onOpenLightbox(0)}
                  styleMode="polaroid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Albums Section */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-paper-light)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Bộ Sưu Tập</span>
            <h2 className="section-title">Những Album Chọn Lọc</h2>
            <p className="section-subtitle">
              Mỗi album là một chương nhỏ của hành trình, nơi ký ức được sắp xếp theo từng cung bậc cảm xúc.
            </p>
          </div>

          <div className="albums-grid">
            {albums.slice(0, 4).map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                onSelect={(id) => onSelectAlbum(id)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => onNavigate('albums')}
            >
              Xem tất cả album ({albums.length})
            </button>
          </div>
        </div>
      </section>

      {/* Featured Moments Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Khoảnh Khắc Đọng Lại</span>
            <h2 className="section-title">Từng Khung Hình Lưu Giữ</h2>
            <p className="section-subtitle">
              Một tia nắng nghiêng, trang sách cũ hay bóng chiều buông vội đều đáng để nâng niu.
            </p>
          </div>

          <div className="gallery-grid">
            {featuredPhotos.map((photo) => {
              const originalIndex = photos.findIndex((p) => p.id === photo.id);
              return (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onClick={() => onOpenLightbox(originalIndex >= 0 ? originalIndex : 0)}
                  styleMode="card"
                />
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('gallery')}
            >
              Vào thư viện đầy đủ ({photos.length} bức ảnh)
            </button>
          </div>
        </div>
      </section>

      {/* Latest Journal Feature */}
      {latestJournal && (
        <section style={{ padding: '4.5rem 0', backgroundColor: 'rgba(231, 220, 203, 0.45)', borderTop: '1px solid var(--color-border-subtle)' }}>
          <div className="container container-narrow">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <span className="section-tag">Ghi Chép Mới Nhất</span>
              <h2 className="section-title" style={{ fontSize: '2.2rem' }}>{latestJournal.title}</h2>
              <p className="section-subtitle">
                {latestJournal.date} • {latestJournal.readTime}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-paper-light)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4a5158', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                “{latestJournal.excerpt}”
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {latestJournal.tags.map((tag) => (
                    <span key={tag} className="journal-tag">#{tag}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-text"
                  onClick={() => onNavigate('journal')}
                >
                  Đọc toàn bộ bài viết →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
