import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface NavbarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingMood, setIsPlayingMood] = useState(false);

  const navItems: { tab: NavigationTab; label: string }[] = [
    { tab: 'home', label: 'Trang chủ' },
    { tab: 'gallery', label: 'Thư viện ảnh' },
    { tab: 'albums', label: 'Album' },
    { tab: 'timeline', label: 'Dòng thời gian' },
    { tab: 'journal', label: 'Nhật ký' },
    { tab: 'about', label: 'Giới thiệu' }
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMoodAudio = () => {
    setIsPlayingMood(!isPlayingMood);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand */}
        <div 
          className="navbar-brand" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
        >
          <div className="navbar-wordmark">
            <svg className="navbar-wordmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span>Tháng Năm Cất Giữ</span>
          </div>
          <span className="navbar-tagline">Photo Journal & Memories</span>
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Menu chính">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.tab}>
                <button
                  type="button"
                  className={`nav-link ${activeTab === item.tab ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.tab)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions & Ambient Toggle */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="audio-toggle-btn"
            onClick={toggleMoodAudio}
            title={isPlayingMood ? 'Tắt chế độ lắng đọng' : 'Bật chế độ lắng đọng (Mood)'}
            aria-label="Chế độ âm hưởng lắng đọng"
          >
            <span className={`audio-pulse ${isPlayingMood ? 'active' : ''}`} />
            <span>{isPlayingMood ? 'Giai điệu: Bật' : 'Lắng đọng'}</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.tab}
            type="button"
            className={`mobile-drawer-link ${activeTab === item.tab ? 'active' : ''}`}
            onClick={() => handleNavClick(item.tab)}
            style={{ textAlign: 'left', background: 'none', border: 'none' }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
