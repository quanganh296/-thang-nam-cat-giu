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
          <span className="section-tag">Ý Nghĩa & Lời Bộc Bạch</span>
          <h1 className="section-title">Về “Tháng Năm Cất Giữ”</h1>
          <p className="section-subtitle">
            Góc nhỏ bình yên nơi NQA lặng lẽ cất giữ nụ cười của người con gái mình thầm thương (TTLA).
          </p>
        </div>

        {/* Story Card */}
        <div className="about-card">
          <div className="about-quote-box">
            <blockquote>
              “Có những tình cảm chưa từng một lần được gọi tên, nhưng suốt những năm tháng ấy, em luôn là điều dịu dàng nhất.”
            </blockquote>
          </div>

          <div className="about-prose">
            <p>
              <strong>Tháng Năm Cất Giữ</strong> không phải là album của một cặp đôi, cũng không phải nơi trưng bày cảnh quan hay cảnh vật xa lạ. 
              Đây là góc ký ức nhỏ bé, chân thành nhất được <strong>NQA</strong> tạo ra để lưu giữ hình bóng của người con gái mình thầm yêu — <strong>TTLA</strong>.
            </p>

            <p>
              Chúng tôi chưa từng có một mối quan hệ hẹn hò chính thức, và tôi cũng chưa từng một lần dám ngỏ lời cùng em. 
              Tình cảm này tồn tại như một khoảng lặng bình yên trong lòng: lặng lẽ ngắm nhìn em từ phía sau, cầu mong em luôn rạng rỡ 
              và trân trọng từng khoảnh khắc hiếm hoi được ở gần em.
            </p>

            <p>
              Mỗi bức ảnh ở đây là một mảnh ghép vô giá: từ nụ cười trong veo của em trong ngày sinh nhật tuổi 20, 
              cho đến chiếc bảng gỗ nhỏ xinh <em>"HAPPY BIRTHDAY ANH ❤"</em> mà em chuẩn bị trong bữa tối sinh nhật ấm cúng. 
              Dù với em đó có thể chỉ là một lời chúc mừng giản dị, nhưng với một người mang lòng tương tư như tôi, 
              đó là kỷ niệm đẹp nhất mà thanh xuân đã ban tặng.
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
                <strong>Ảnh của NQA:</strong> Được đặt tên bắt đầu bằng <code>NQA...</code> (ví dụ: <code>NQA1.jpg</code>...). Hiện tại khung ảnh của NQA đang để trống nền trắng tao nhã, tượng trưng cho người đứng sau ống kính.
              </li>
              <li>
                <strong>Tự động nhận diện:</strong> Mỗi khi có ảnh mới được lưu vào thư mục <code>public/images/</code>, hệ thống sẽ tự động quét, phân loại chủ đề và hiển thị lên giao diện mà không cần phải can thiệp hay sửa mã nguồn thủ công.
              </li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-dark-charcoal)', margin: '2rem 0 1rem' }}>
              Lời nhắn gửi cho mai sau
            </h3>

            <p>
              Tình yêu đơn phương không cần sự hồi đáp, chỉ cần biết người mình thương luôn được bình an và hạnh phúc. 
              Dù thời gian có trôi đi bao lâu, khi mở lại trang web này, tôi vẫn sẽ luôn mỉm cười và biết ơn vì thanh xuân đã từng được thương một người đẹp đẽ và thuần khiết đến thế.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('gallery')}
            >
              Xem ảnh của Nàng (TTLA)
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
