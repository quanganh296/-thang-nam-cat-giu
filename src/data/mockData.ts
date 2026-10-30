import { Album, Photo, TimelineEvent, JournalEntry } from '../types';
import autoPhotosData from './autoPhotos.json';
import { resolveImageUrl } from '../utils/imageUtils';

// Helper to get raw auto photos
const rawPhotos = autoPhotosData.photos as Photo[];

// Auto-resolved photos with Vite base URL support
export const PHOTOS: Photo[] = rawPhotos.map((p) => ({
  ...p,
  url: p.url ? resolveImageUrl(p.url) : ''
}));

export const ALBUMS: Album[] = [
  {
    id: 'goc-cua-em',
    title: 'Nụ Cười Của Em (TTLA)',
    description: 'Nơi cất giữ những khoảnh khắc đẹp nhất của người con gái tôi yêu. Mỗi nụ cười, ánh mắt của Em tựa như tia nắng ban mai sưởi ấm cả khoảng trời tuổi trẻ.',
    coverUrl: resolveImageUrl('images/TTLAPic1.jpg'),
    dateRange: 'Kỷ niệm nàng thơ',
    photoCount: PHOTOS.filter((p) => p.subject === 'ttla').length,
    theme: 'Nàng Thơ & Nụ Cười'
  },
  {
    id: 'ngay-ben-nhau',
    title: 'Những Ngày Bên Nhau',
    description: 'Bữa tối sinh nhật ấm cúng với chiếc bảng "Happy Birthday Anh ❤", những buổi hẹn hò bình yên và từng khoảnh khắc hai ta chung một nhịp đập yêu thương.',
    coverUrl: resolveImageUrl('images/TTLAPic2.jpg'),
    dateRange: 'Hành trình chung đôi',
    photoCount: PHOTOS.filter((p) => p.albumId === 'ngay-ben-nhau').length,
    theme: 'Hẹn Hò & Tình Yêu'
  },
  {
    id: 'goc-cua-anh',
    title: 'Góc Của NQA (Chàng Trai)',
    description: 'Khoảng không gian dành riêng cho chàng trai, người nguyện đứng sau ống kính để cất giữ trọn vẹn những nét dịu dàng nhất của người mình thương.',
    coverUrl: '', // Placeholder frame for NQA
    dateRange: 'Chờ đón ảnh mới',
    photoCount: PHOTOS.filter((p) => p.subject === 'nqa').length,
    theme: 'Chân Dung & Tự Sự'
  },
  {
    id: 'ky-vat-va-loi-yeu',
    title: 'Kỷ Vật & Lời Nhắn Gửi',
    description: 'Mỗi lời chúc, tấm ảnh nhỏ và mẩu chuyện không tên đều là minh chứng cho một tình yêu chân thành, bền bỉ qua năm tháng.',
    coverUrl: resolveImageUrl('images/TTLAPic2.jpg'),
    dateRange: 'Mãi về sau',
    photoCount: PHOTOS.length,
    theme: 'Kỷ Vật & Lời Yêu'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1',
    date: 'Bữa Tối Sinh Nhật Đáng Nhớ',
    monthYear: 'Sinh Nhật Anh',
    title: 'Bữa Tối "Happy Birthday Anh ❤"',
    description: 'Bữa tối ấm cúng tại quán ăn quen thuộc. Nhìn chiếc bảng gỗ xinh xắn với dòng chữ "HAPPY BIRTHDAY ANH ❤" do chính tay Em chuẩn bị, cùng ánh mắt ngước lên nhìn Anh qua bàn ăn, Anh biết mình là người may mắn nhất thế gian này.',
    photos: [resolveImageUrl('images/TTLAPic2.jpg')],
    location: 'Quán Quen — Hà Nội',
    tag: 'Sinh Nhật Anh'
  },
  {
    id: 'tl-2',
    date: 'Kỷ Niệm Tuổi 20 Của Em',
    monthYear: 'Tuổi 20 Rực Rỡ',
    title: 'Nàng Thơ Bước Sang Tuổi 20',
    description: 'Em trong chiếc váy dịu dàng, nụ cười tinh khôi tựa như một đóa hoa bừng nở giữa sớm mai. Tuổi 20 của Em là khởi đầu cho những ước mơ rạng ngời nhất, và Anh nguyện luôn ở bên để che chở cho nụ cười ấy.',
    photos: [resolveImageUrl('images/TTLAPic1.jpg')],
    location: 'Hà Nội',
    tag: 'Sinh Nhật Em'
  },
  {
    id: 'tl-3',
    date: 'Ngày Đầu Tiên Gặp Gỡ',
    monthYear: 'Khởi Đầu Kỷ Niệm',
    title: 'Khi Hai Ánh Mắt Chạm Nhau',
    description: 'Có những cuộc gặp gỡ như đã được định mệnh an bài từ trước. Giữa dòng người ngược xuôi, ánh mắt đầu tiên ta dành cho nhau đã thắp sáng cả một chặng đường dài đầy ắp yêu thương.',
    photos: [],
    location: 'Hà Nội',
    tag: 'Định Mệnh'
  },
  {
    id: 'tl-4',
    date: 'Những Lời Yêu Chưa Từng Cũ',
    monthYear: 'Hiện Tại & Mai Sau',
    title: 'Tháng Năm Này, Cất Giữ Riêng Em',
    description: 'Trang web này ra đời không phải để phô trương, mà là chốn dừng chân bình yên nhất để NQA lưu giữ từng nụ cười, từng nét đáng yêu của TTLA — người con gái mà Anh yêu nhất đời.',
    photos: [resolveImageUrl('images/TTLAPic1.jpg'), resolveImageUrl('images/TTLAPic2.jpg')],
    location: 'Trái Tim NQA',
    tag: 'Mãi Yêu'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'jn-1',
    title: 'Gửi Em — Người con gái sưởi ấm trái tim anh',
    date: 'Tháng Năm Cất Giữ',
    excerpt: 'Anh tạo ra nơi này không phải để lưu lại cảnh vật xa xôi, mà để cất giữ người con gái anh yêu nhất...',
    content: [
      'Giữa cuộc sống ồn ào và vội vã, người ta thường mải mê chụp những cảnh đẹp kỳ vĩ hay những chuyến đi xa xôi. Nhưng đối với Anh, phong cảnh đẹp nhất trên đời này chỉ gói gọn trong nụ cười và ánh mắt của Em.',
      'Mỗi bức ảnh lưu lại ở đây là một khoảnh khắc kỳ diệu: khi Em cười tít mắt, khi Em e ấp nhìn qua bàn ăn, hay khi Em diện chiếc váy xinh đón tuổi mới. Dù thời gian có trôi đi bao lâu, vẻ đẹp ấy trong mắt Anh sẽ mãi vẹn nguyên như ngày đầu.',
      'Cảm ơn Em đã xuất hiện và biến thanh xuân của Anh thành một bức tranh ngập tràn sắc màu và hơi ấm.'
    ],
    coverUrl: resolveImageUrl('images/TTLAPic1.jpg'),
    tags: ['Gửi TTLA', 'Tình yêu', 'Nàng thơ'],
    readTime: '2 phút đọc'
  },
  {
    id: 'jn-2',
    title: 'Về chiếc bảng "HAPPY BIRTHDAY ANH ❤"',
    date: 'Kỷ Niệm Ngọt Ngào',
    excerpt: 'Đó là buổi tối sinh nhật ấm áp nhất mà anh từng có, khi mọi muộn phiền ngoài kia đều dừng lại trước mắt Em...',
    content: [
      'Hôm ấy, khi bước vào quán ăn, nhìn thấy chiếc bảng đen nhỏ xinh với những nét chữ phấn nắn nót "HAPPY BIRTHDAY ANH ❤", tim Anh như lỡ một nhịp vì xúc động.',
      'Em ngồi đó, hai tay đan vào nhau, đôi mắt tròn xoe ngước nhìn Anh đầy tình cảm. Chẳng cần những bữa tiệc xa hoa, chỉ cần có Em ngồi đối diện, cùng thưởng thức những món ăn giản dị và chia sẻ những câu chuyện không đầu không cuối, đó đã là niềm hạnh phúc lớn nhất của đời Anh.',
      'Bức ảnh TTLAPic2 được lưu lại như một lời nhắc nhở rằng: Anh luôn được yêu thương bởi một người con gái dịu dàng và tuyệt vời đến thế.'
    ],
    coverUrl: resolveImageUrl('images/TTLAPic2.jpg'),
    tags: ['Sinh nhật Anh', 'Hẹn hò', 'Hạnh phúc'],
    readTime: '3 phút đọc'
  },
  {
    id: 'jn-3',
    title: 'Góc Của NQA — Lời hứa bên Em',
    date: 'Tâm Tình Của Anh',
    excerpt: 'Khung ảnh của Anh hiện vẫn đang để trống, bởi vì Anh thích được đứng ở vị trí người lưu giữ hình bóng của Em hơn...',
    content: [
      'Nhiều người hỏi sao trong cuốn album này chưa thấy nhiều ảnh của Anh (NQA). Thật ra, Anh luôn thích vị trí đứng phía sau ống kính hơn — để được ngắm nhìn Em ở góc độ tự nhiên nhất, yêu kiều nhất.',
      'Khung ảnh của Anh đang để trống nền trắng tinh khôi, như một lời hẹn ước rằng hành trình này sẽ còn tiếp tục được lấp đầy bằng những bức ảnh chung đôi của hai đứa trong tương lai.',
      'Dù sau này tóc có ngả màu, "Tháng Năm Cất Giữ" vẫn sẽ luôn là nơi lưu giữ chứng nhân cho một tình yêu chân thành và sâu đậm nhất.'
    ],
    coverUrl: '',
    tags: ['Tự sự NQA', 'Lời hứa', 'Mai sau'],
    readTime: '2 phút đọc'
  }
];
