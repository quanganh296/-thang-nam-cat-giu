import React from 'react';
import { NavigationTab } from '../types';

interface FooterProps {
  onTabChange: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Tháng Năm Cất Giữ</h2>
            <p className="footer-quote">
              “Có những tháng năm, anh muốn cất giữ riêng nụ cười của Em.”
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#8c949e' }}>
              Không gian lưu giữ ký ức tình yêu dành riêng cho TTLA và NQA — cất giữ từng khoảnh khắc thanh xuân ngọt ngào nhất.
            </p>
          </div>

          <div className="footer-col">
            <h4>Khám phá</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => onTabChange('home')}>Trang chủ</button>
              </li>
              <li>
                <button type="button" onClick={() => onTabChange('gallery')}>Thư viện ảnh</button>
              </li>
              <li>
                <button type="button" onClick={() => onTabChange('albums')}>Bộ sưu tập Album</button>
              </li>
              <li>
                <button type="button" onClick={() => onTabChange('timeline')}>Dòng thời gian</button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Góc Nhỏ</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => onTabChange('journal')}>Ghi chép nhật ký</button>
              </li>
              <li>
                <button type="button" onClick={() => onTabChange('about')}>Câu chuyện & Ý nghĩa</button>
              </li>
              <li>
                <a href="https://github.com/quanganh296/-thang-nam-cat-giu" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tháng Năm Cất Giữ. Được thiết kế với tinh thần lưu giữ ký ức.</p>
          
          <button 
            type="button" 
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Cuộn lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
