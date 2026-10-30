import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
  styleMode?: 'card' | 'polaroid';
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick, styleMode = 'card' }) => {
  const [hasError, setHasError] = useState(false);

  const isBlankPlaceholder = photo.isPlaceholder || !photo.url;

  // Render white blank placeholder for NQA when no photo is uploaded yet
  if (isBlankPlaceholder) {
    if (styleMode === 'polaroid') {
      return (
        <div 
          className="polaroid-card polaroid-blank-placeholder" 
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onClick()}
          aria-label={`Khung ảnh chờ của ${photo.title}`}
        >
          <div className="polaroid-photo-wrapper blank-white-frame">
            <div className="blank-frame-content">
              <span className="blank-frame-icon">📷</span>
              <span className="blank-frame-title">Góc Của NQA</span>
              <span className="blank-frame-sub">Ảnh nền trắng đang chờ ảnh...</span>
            </div>
          </div>
          <div className="polaroid-caption">{photo.title}</div>
          <div className="polaroid-date-stamp">NQA — Đang chờ ảnh</div>
        </div>
      );
    }

    return (
      <article 
        className="photo-item photo-item-blank"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        aria-label={`Khung ảnh chờ của ${photo.title}`}
      >
        <div className={`photo-media-box ${photo.aspect || 'portrait'} blank-white-frame`}>
          <div className="blank-frame-content">
            <div className="blank-avatar-circle">
              <span>NQA</span>
            </div>
            <h4 className="blank-frame-heading">Góc Của NQA</h4>
            <p className="blank-frame-note">
              Ảnh hiện đang để trống nền trắng. Khi thêm file <code>NQA1.jpg</code> vào <code>public/images/</code>, ảnh sẽ tự động hiển thị tại đây!
            </p>
            <span className="blank-frame-badge">Khung ảnh trắng</span>
          </div>
          <span className="photo-film-badge">Chờ đón NQA</span>
        </div>

        <div className="photo-meta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
            <span className="subject-tag nqa-tag">Chàng Trai NQA</span>
          </div>
          <h3 className="photo-title">{photo.title}</h3>
          <p className="photo-caption">{photo.caption}</p>
          <div className="photo-info-bar">
            <span>{photo.location}</span>
            <span>{photo.date}</span>
          </div>
        </div>
      </article>
    );
  }

  // Regular photo render
  if (styleMode === 'polaroid') {
    return (
      <div 
        className="polaroid-card" 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        aria-label={`Xem ảnh ${photo.title}`}
      >
        <div className="polaroid-photo-wrapper">
          {hasError ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#A58B70' }}>
              <span>Không tải được ảnh</span>
            </div>
          ) : (
            <img 
              src={photo.url} 
              alt={photo.title} 
              loading="lazy"
              onError={() => setHasError(true)}
            />
          )}
        </div>
        <div className="polaroid-caption">{photo.title}</div>
        <div className="polaroid-date-stamp">{photo.location} — {photo.date}</div>
      </div>
    );
  }

  return (
    <article 
      className="photo-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Xem ảnh ${photo.title}`}
    >
      <div className={`photo-media-box ${photo.aspect || 'portrait'}`}>
        {hasError ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#A58B70' }}>
            <span>Không tải được ảnh</span>
          </div>
        ) : (
          <img 
            src={photo.url} 
            alt={photo.title} 
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}

        {photo.subject === 'ttla' && (
          <span className="subject-corner-badge">💖 Nàng Thơ TTLA</span>
        )}
        {photo.subject === 'nqa' && (
          <span className="subject-corner-badge">Chàng Trai NQA</span>
        )}
        {photo.filmStock && (
          <span className="photo-film-badge">{photo.filmStock}</span>
        )}
      </div>

      <div className="photo-meta">
        <h3 className="photo-title">{photo.title}</h3>
        <p className="photo-caption">{photo.caption}</p>
        <div className="photo-info-bar">
          <span>{photo.location}</span>
          <span>{photo.date}</span>
        </div>
      </div>
    </article>
  );
};
