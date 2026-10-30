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
          <span className="section-tag">Ý Nghĩa & Sứ Mệnh</span>
          <h1 className="section-title">Về “Tháng Năm Cất Giữ”</h1>
          <p className="section-subtitle">
            Góc nhỏ bình yên nơi NQA lưu giữ nụ cười của người con gái tôi yêu (TTLA) và những ngày tháng chung đôi.
          </p>
        </div>

        {/* Story Card */}
        <div className="about-card">
          <div className="about-quote-box">
            <blockquote>
              “Thế giới ngoài kia rộng lớn với muôn vàn cảnh sắc, nhưng với anh, cảnh đẹp nhất chỉ gói gọn trong đôi mắt và nụ cười của Em.”
            </blockquote>
          </div>

          <div className="about-prose">
            <p>
              <strong>Tháng Năm Cất Giữ</strong> không phải là nơi trưng bày cảnh quan, thiên nhiên hay những vật thể vô tri. 
              Đây là một bảo tàng ký ức nhỏ bé, thiêng liêng và chân thật nhất được <strong>NQA</strong> tạo nên dành riêng cho 
              người con gái anh yêu — <strong>TTLA</strong>.
            </p>

            <p>
              Từng bức ảnh được lưu trữ tại đây đều mang một dấu ấn khó phai: từ nụ cười rạng rỡ của Em trong ngày sinh nhật tuổi 20, 
              cho đến chiếc bảng gỗ nhỏ xinh <em>"HAPPY BIRTHDAY ANH ❤"</em> do chính tay Em chuẩn bị trong buổi tối hẹn hò ấm áp. 
              Đó là những khoảnh khắc mà thời gian có thể trôi qua, nhưng tình cảm và hơi ấm thì sẽ mãi đọng lại vẹn nguyên như phút ban đầu.
            </p>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-dark-charcoal)', margin: '2rem 0 1rem' }}>
              Cơ chế lưu trữ tự động
            </h3>

            <p>
              Website được xây dựng với cơ chế quản lý ảnh thông minh và tự động hoàn toàn:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: '#4a5158' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Ảnh của Nàng (TTLA):</strong> Được đặt tên bắt đầu bằng tiền tố <code>TTLAPic...</code> (ví dụ: <code>TTLAPic1.jpg</code>, <code>TTLAPic2.jpg</code>...).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Ảnh của Chàng (NQA):</strong> Được đặt tên bắt đầu bằng <code>NQA...</code> (ví dụ: <code>NQA1.jpg</code>...). Hiện tại khung ảnh của NQA đang được để trống nền trắng tao nhã, sẵn sàng đón chờ những tấm hình tiếp theo.
              </li>
              <li>
                <strong>Tự động nhận diện:</strong> Mỗi khi có ảnh mới được lưu vào thư mục <code>public/images/</code>, hệ thống sẽ tự động quét, phân loại chủ đề và hiển thị lên giao diện mà không cần phải can thiệp hay sửa mã nguồn thủ công.
              </li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-dark-charcoal)', margin: '2rem 0 1rem' }}>
              Lời nhắn gửi cho mai sau
            </h3>

            <p>
              Dù 10 năm, 20 năm hay nửa thế kỷ nữa trôi qua, khi mở lại trang web này, hy vọng Em và Anh sẽ luôn mỉm cười 
              khi nhìn lại những tháng năm thanh xuân tươi đẹp nhất mà hai đứa đã từng cùng nhau cất giữ.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('gallery')}
            >
              Xem ảnh của Em (TTLA)
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
