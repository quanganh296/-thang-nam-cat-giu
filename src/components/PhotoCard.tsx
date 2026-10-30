import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
  styleMode?: 'card' | 'polaroid';
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick, styleMode = 'card' }) => {
  const [hasError, setHasError] = useState(false);

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
              <span>Ảnh mẫu</span>
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
