import React from 'react';
import { TimelineEvent, Photo } from '../types';

interface TimelinePageProps {
  events: TimelineEvent[];
  photos: Photo[];
  onOpenLightboxByUrl: (photoUrl: string) => void;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({
  events,
  onOpenLightboxByUrl
}) => {
  return (
    <div className="timeline-page" style={{ padding: '3.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Dòng Thời Gian Tình Yêu</span>
          <h1 className="section-title">Hành Trình NQA & TTLA</h1>
          <p className="section-subtitle">
            Từng mốc thời gian đánh dấu những khoảnh khắc ngọt ngào: từ ngày đầu gặp gỡ, sinh nhật tuổi 20 của Em, đến bữa tối ấm áp "Happy Birthday Anh ❤".
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="timeline-stream">
          {events.map((event) => (
            <div key={event.id} className="timeline-node">
              <div className="timeline-pin" />
              
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-date">{event.date}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-blue-gray)' }}>📍 {event.location}</span>
                    <span className="timeline-tag">{event.tag}</span>
                  </div>
                </div>

                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-body">{event.description}</p>

                {event.photos && event.photos.length > 0 && (
                  <div className="timeline-photos">
                    {event.photos.map((url, pIdx) => (
                      <div
                        key={pIdx}
                        className="timeline-photo-box"
                        onClick={() => onOpenLightboxByUrl(url)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && onOpenLightboxByUrl(url)}
                        aria-label={`Xem ảnh của ${event.title}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={url} alt={`${event.title} minh họa ${pIdx + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
