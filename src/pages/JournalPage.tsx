import React, { useState } from 'react';
import { JournalEntry } from '../types';

interface JournalPageProps {
  entries: JournalEntry[];
}

export const JournalPage: React.FC<JournalPageProps> = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  return (
    <div className="journal-page" style={{ padding: '3.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Nhật Ký & Tâm Tình</span>
          <h1 className="section-title">Những Trang Thư Gửi Nàng</h1>
          <p className="section-subtitle">
            Từng dòng chữ được nắn nót ghi lại với lòng chân thành nhất — gửi tới TTLA, người con gái thắp sáng thanh xuân của NQA.
          </p>
        </div>

        {/* Journal Grid */}
        <div className="journal-grid">
          {entries.map((entry) => (
            <article key={entry.id} className="journal-card">
              <div className="journal-meta">
                <span>{entry.date}</span>
                <span>• {entry.readTime}</span>
              </div>

              <h2 className="journal-title">{entry.title}</h2>
              <p className="journal-excerpt">“{entry.excerpt}”</p>

              <div className="journal-tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="journal-tag">#{tag}</span>
                ))}
              </div>

              <button
                type="button"
                className="btn btn-outline"
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => setSelectedEntry(entry)}
              >
                Đọc bài viết
              </button>
            </article>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedEntry && (
          <div 
            className="modal-overlay"
            onClick={() => setSelectedEntry(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Đọc bài: ${selectedEntry.title}`}
          >
            <div 
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedEntry(null)}
                aria-label="Đóng bài viết"
              >
                ✕
              </button>

              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-warm-brown)', marginBottom: '0.5rem' }}>
                  {selectedEntry.date} • {selectedEntry.readTime}
                </div>
                <h1 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2.2rem', color: 'var(--color-dark-charcoal)', lineHeight: '1.25' }}>
                  {selectedEntry.title}
                </h1>
              </div>

              {selectedEntry.coverUrl && (
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '2rem', backgroundColor: 'var(--color-beige)' }}>
                  <img src={selectedEntry.coverUrl} alt={selectedEntry.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}

              <div style={{ fontSize: '1.08rem', lineHeight: '1.85', color: '#3e444b' }}>
                {selectedEntry.content.map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ marginBottom: '1.5rem', textIndent: '1.5rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div style={{ borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '1.5rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {selectedEntry.tags.map((tag) => (
                    <span key={tag} className="journal-tag">#{tag}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedEntry(null)}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
