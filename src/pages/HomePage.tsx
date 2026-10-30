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
  // Focus on TTLA photos and featured photos
  const featuredPhotos = photos.filter((p) => p.featured || p.subject === 'ttla' || p.subject === 'nqa');
  const heroPhoto = photos.find((p) => p.subject === 'ttla') || photos[0];
  const latestJournal = journals[0];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🕊️</span>
              <span>Tâm tình thầm lặng • NQA gửi TTLA</span>
            </div>
            
            <h1 className="hero-title">
              Cất giữ những <em>nụ cười</em> của Em
            </h1>

            <p className="hero-quote">
              “Có những tình cảm chưa từng một lần được gọi tên, nhưng suốt những năm tháng ấy, em luôn là điều dịu dàng nhất.”
            </p>

            <p className="hero-description">
              Góc nhỏ riêng tư nơi NQA lặng lẽ cất giữ những khoảnh khắc của người con gái mình thầm thương (TTLA). Không mong cầu hồi đáp hay một danh phận, chỉ mong mỗi nụ cười và bước đi của em đều ngập tràn an yên.
            </p>

            <div className="hero-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onNavigate('gallery')}
              >
                <span>Xem ảnh của Nàng</span>
                <span>→</span>
              </button>

              <button 
                type="button" 
                className="btn btn-outline"
                onClick={() => onNavigate('timeline')}
              >
                <span>Dòng thời gian kỷ niệm</span>
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
            <span className="section-tag">Góc Kỷ Niệm</span>
            <h2 className="section-title">Những Album Cất Giữ</h2>
            <p className="section-subtitle">
              Mỗi album là một góc nhỏ của tâm tư, lưu lại bóng hình của nàng thơ và những khoảnh khắc hiếm hoi được ở bên em.
            </p>
          </div>

          <div className="albums-grid">
            {albums.map((album) => (
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
              Xem toàn bộ album ({albums.length})
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
              Dù chỉ là người đứng từ phía xa, nụ cười của em luôn là điều quý giá nhất mà tôi muốn giữ trọn theo năm tháng.
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
              Vào thư viện ảnh ({photos.length} khung hình)
            </button>
          </div>
        </div>
      </section>

      {/* Latest Journal Feature */}
      {latestJournal && (
        <section style={{ padding: '4.5rem 0', backgroundColor: 'rgba(231, 220, 203, 0.45)', borderTop: '1px solid var(--color-border-subtle)' }}>
          <div className="container container-narrow">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <span className="section-tag">Tâm Sự Của Anh</span>
              <h2 className="section-title" style={{ fontSize: '2.2rem' }}>{latestJournal.title}</h2>
              <p className="section-subtitle">
                {latestJournal.date} • {latestJournal.readTime}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-paper-light)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4a5158', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                “{latestJournal.excerpt}”
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
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
