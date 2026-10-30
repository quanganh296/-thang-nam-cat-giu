import React from 'react';
import { NavigationTab } from '../types';

interface AboutPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="about-page" style={{ padding: '3.5rem 0 5rem' }}>
      <div className="container container-narrow">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Ý Nghĩa & Khởi Nguồn</span>
          <h1 className="section-title">Về “Tháng Năm Cất Giữ”</h1>
          <p className="section-subtitle">
            Một chốn dừng chân nhỏ bé dành riêng cho những điều xưa cũ và những ngày tháng đã qua.
          </p>
        </div>

        {/* Story Card */}
        <div className="about-card">
          <div className="about-quote-box">
            <blockquote>
              “Có những khoảnh khắc trôi qua rất nhanh, nhưng vẫn xứng đáng được lưu giữ. Đây là nơi dành cho những bức ảnh, những dòng ghi chú và những điều từng mang ý nghĩa đặc biệt.”
            </blockquote>
          </div>

          <div className="about-prose">
            <p>
              Giữa một thế giới chuyển động không ngừng nghỉ, nơi hàng triệu hình ảnh được đăng tải và lướt qua chỉ trong một cái chớp mắt, 
              <strong> Tháng Năm Cất Giữ</strong> được tạo ra như một khoảng lặng ấm áp — một cuốn nhật ký ảnh số mang trọn vẹn tinh thần mộc mạc của ảnh film truyền thống.
            </p>

            <p>
              Ý tưởng bắt nguồn từ cảm giác mở lại chiếc hộp thiếc cũ dưới gầm bàn, tìm thấy những tấm ảnh Polaroid đã ngả màu thời gian, 
              những cuộn film tráng dở từ mùa đông năm nào, và cuốn sổ tay ghi vội vài dòng cảm xúc bên tách trà chiều. 
              Mỗi bức ảnh không đơn thuần là điểm ảnh kỹ thuật số, mà là một chiếc chìa khóa mở về quá khứ, nhắc nhở ta về những con người, 
              những góc phố và những cảm xúc ta từng nâng niu.
            </p>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-dark-charcoal)', margin: '2rem 0 1rem' }}>
              Tinh thần thẩm mỹ
            </h3>

            <p>
              Giao diện website được thiết kế với gam màu kem ấm (#F5F0E8), sắc nâu trầm (#A58B70) và đen than (#292B2F), 
              kết hợp cùng kiểu chữ serif thanh lịch và các hiệu ứng chuyển động khẽ khàng. Chúng tôi từ chối những bảng màu chói lóa 
              hay giao diện công nghiệp khô cứng, để từng bức ảnh của bạn được cất giữ trọn vẹn trong một không gian giàu chất thơ và tính điện ảnh.
            </p>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-dark-charcoal)', margin: '2rem 0 1rem' }}>
              Bản quyền & Sự tôn trọng
            </h3>

            <p>
              Mọi bức ảnh và câu chuyện được lưu lại tại đây đều được gìn giữ với lòng trân quý sâu sắc nhất. 
              Nếu bạn cũng có những năm tháng muốn cất giữ, hy vọng không gian này sẽ mang lại cho bạn sự an yên và gợi nhắc về những điều đẹp đẽ trong cuộc đời.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('gallery')}
            >
              Xem thư viện ảnh
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => onNavigate('timeline')}
            >
              Khám phá dòng thời gian
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
