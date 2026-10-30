import React, { useEffect, useState } from 'react';
import { Photo } from '../types';

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  const [imageError, setImageError] = useState(false);

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentPhoto) return null;

  const isBlank = currentPhoto.isPlaceholder || !currentPhoto.url;

  return (
    <div 
      className="lightbox-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Chi tiết ảnh: ${currentPhoto.title}`}
    >
      <div 
        className="lightbox-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Đóng xem ảnh"
        >
          ✕
        </button>

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={onPrev}
            aria-label="Ảnh trước"
          >
            ‹
          </button>
        )}

        {/* Main Image Display */}
        <div className="lightbox-main">
          {isBlank ? (
            <div className="lightbox-blank-content">
              <div className="lightbox-blank-box">
                <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>📷</span>
                <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', color: '#292B2F', marginBottom: '0.5rem' }}>
                  Góc Của NQA
                </h3>
                <p style={{ color: '#737B83', maxWidth: '400px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
                  Khung ảnh hiện đang để trống nền trắng. Chỉ cần lưu ảnh của bạn vào thư mục <code>public/images/</code> với tên <strong>NQA1.jpg</strong>, hệ thống sẽ tự động nhận diện và hiển thị tại đây!
                </p>
                <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: '#FAF7F2', borderRadius: '9999px', fontSize: '0.85rem', color: '#A58B70', border: '1px solid #E7DCCB' }}>
                  Trạng thái: Đang chờ ảnh từ Chàng trai
                </div>
              </div>
            </div>
          ) : imageError ? (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#E7DCCB' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 1rem' }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.25rem' }}>Không thể tải bức ảnh này</p>
              <p style={{ fontSize: '0.85rem', color: '#A58B70', marginTop: '0.5rem' }}>{currentPhoto.title}</p>
            </div>
          ) : (
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="lightbox-img"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={onNext}
            aria-label="Ảnh kế tiếp"
          >
            ›
          </button>
        )}

        {/* Footer Info */}
        <div className="lightbox-footer">
          <div className="lightbox-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              {currentPhoto.subject === 'ttla' && (
                <span className="subject-tag ttla-tag">💖 Nàng Thơ TTLA</span>
              )}
              {currentPhoto.subject === 'nqa' && (
                <span className="subject-tag nqa-tag">Chàng Trai NQA</span>
              )}
              <h3 style={{ margin: 0 }}>{currentPhoto.title}</h3>
            </div>
            <p>{currentPhoto.caption}</p>
          </div>
          <div className="lightbox-details">
            <div><strong>{currentPhoto.location}</strong> — {currentPhoto.date}</div>
            {currentPhoto.filmStock && (
              <div style={{ marginTop: '0.2rem', fontStyle: 'italic', fontSize: '0.8rem' }}>
                🎞️ {currentPhoto.filmStock}
              </div>
            )}
            <div style={{ marginTop: '0.2rem', fontSize: '0.78rem', opacity: 0.8 }}>
              Ảnh {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
