import React, { useState } from 'react';
import { Album } from '../types';

interface AlbumCardProps {
  album: Album;
  onSelect: (albumId: string) => void;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album, onSelect }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="album-card"
      onClick={() => onSelect(album.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(album.id)}
      aria-label={`Mở album ${album.title}`}
    >
      <div className="album-cover-wrapper">
        {hasError ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#A58B70' }}>
            <span>Bìa Album</span>
          </div>
        ) : (
          <img 
            src={album.coverUrl} 
            alt={`Bìa album ${album.title}`} 
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
        <span className="album-badge">{album.photoCount} bức ảnh</span>
      </div>

      <div className="album-content">
        <span className="album-theme">{album.theme}</span>
        <h3 className="album-title">{album.title}</h3>
        <p className="album-desc">{album.description}</p>
        
        <div className="album-footer">
          <span>Thời gian: {album.dateRange}</span>
          <span style={{ color: 'var(--color-dark-charcoal)', fontWeight: 600 }}>Xem album →</span>
        </div>
      </div>
    </div>
  );
};
