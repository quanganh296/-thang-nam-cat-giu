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
    title: 'Nụ Cười Của Nàng (TTLA)',
    description: 'Nơi cất giữ những khoảnh khắc đẹp nhất của người con gái tôi thầm thương. Dù chỉ là người đứng từ phía sau ngắm nhìn, nụ cười ấy vẫn là tia nắng ấm áp nhất sưởi ấm cả một thời thanh xuân.',
    coverUrl: resolveImageUrl('images/TTLAPic1.jpg'),
    dateRange: 'Bóng hình nàng thơ',
    photoCount: PHOTOS.filter((p) => p.subject === 'ttla').length,
    theme: 'Nàng Thơ & Nụ Cười'
  },
  {
    id: 'ky-niem-ben-em',
    title: 'Kỷ Niệm Từng Có',
    description: 'Bữa tối sinh nhật ấm áp cùng chiếc bảng "Happy Birthday Anh ❤", những dịp hiếm hoi được ngồi đối diện và lắng nghe em cười — những khoảnh khắc quý giá mà tôi mãi trân trọng.',
    coverUrl: resolveImageUrl('images/TTLAPic2.jpg'),
    dateRange: 'Khoảnh khắc đọng lại',
    photoCount: PHOTOS.filter((p) => p.albumId === 'ky-niem-ben-em').length,
    theme: 'Ấm Áp & Lắng Đọng'
  },
  {
    id: 'goc-cua-anh',
    title: 'Góc Của NQA (Người Lặng Thầm)',
    description: 'Khoảng không gian dành riêng cho chàng trai đứng sau khung hình — người chưa từng một lần dám ngỏ lời, chỉ biết lặng lẽ dõi theo và mong cầu em luôn được bình yên.',
    coverUrl: '', // Placeholder frame for NQA
    dateRange: 'Chờ đón ảnh mới',
    photoCount: PHOTOS.filter((p) => p.subject === 'nqa').length,
    theme: 'Chân Dung & Tự Sự'
  },
  {
    id: 'nhung-dieu-chua-noi',
    title: 'Những Điều Chưa Từng Nói',
    description: 'Có những tâm tư chỉ dám gửi vào trang viết và cất giữ riêng cho mình. Một mối tình đơn phương thuần khiết, chưa từng đòi hỏi một lần được hồi đáp.',
    coverUrl: resolveImageUrl('images/TTLAPic2.jpg'),
    dateRange: 'Cất giữ mãi mãi',
    photoCount: PHOTOS.length,
    theme: 'Tâm Tình Thầm Lặng'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1',
    date: 'Kỷ Niệm Bữa Tối Sinh Nhật',
    monthYear: 'Sinh Nhật Anh',
    title: 'Bữa Tối "Happy Birthday Anh ❤"',
    description: 'Bữa tối ấm cúng tại quán ăn quen thuộc. Chiếc bảng gỗ nhỏ xinh với dòng chữ "HAPPY BIRTHDAY ANH ❤" do chính tay Em chuẩn bị. Được nhìn thấy nụ cười và ánh mắt dịu dàng của Em qua bàn ăn, dù chỉ là trong thầm lặng, Anh vẫn cảm thấy mình là người may mắn khi có em trong đời.',
    photos: [resolveImageUrl('images/TTLAPic2.jpg')],
    location: 'Quán Quen — Hà Nội',
    tag: 'Kỷ Niệm Quý Giá'
  },
  {
    id: 'tl-2',
    date: 'Kỷ Niệm Tuổi 20 Của Nàng',
    monthYear: 'Tuổi 20 Của Em',
    title: 'Nàng Thơ Rạng Rỡ Tuổi 20',
    description: 'Em trong chiếc váy bồng bềnh, nụ cười tinh khôi tựa như một đóa hoa nở rộ giữa nắng mai. Từ phía xa ngắm nhìn khoảnh khắc em bước sang tuổi 20, Anh chỉ thầm mong mọi điều bình an, hạnh phúc nhất sẽ luôn ở bên em.',
    photos: [resolveImageUrl('images/TTLAPic1.jpg')],
    location: 'Hà Nội',
    tag: 'Tuổi 20 Của Em'
  },
  {
    id: 'tl-3',
    date: 'Lần Đầu Tiên Ánh Mắt Chạm Nhau',
    monthYear: 'Khởi Đầu Thầm Lặng',
    title: 'Khoảnh Khắc Bắt Đầu Biết Tương Tư',
    description: 'Giữa dòng người ngược xuôi, có một khoảnh khắc ánh mắt ấy vô tình chạm phải. Chẳng có lời hẹn ước nào được thốt ra, chỉ có một trái tim bắt đầu biết đập những nhịp rung động thầm kín nhất.',
    photos: [],
    location: 'Hà Nội',
    tag: 'Bắt Đầu'
  },
  {
    id: 'tl-4',
    date: 'Một Mối Tình Đơn Phương',
    monthYear: 'Cất Giữ Riêng Mình',
    title: 'Tình Cảm Chưa Từng Được Gọi Tên',
    description: 'Bọn mình chưa từng có một mối quan hệ hẹn hò chính thức, và Anh cũng chưa một lần dám ngỏ lời. Nhưng "Tháng Năm Cất Giữ" là nơi lưu lại minh chứng cho một tình cảm thuần khiết nhất mà Anh dành riêng cho TTLA.',
    photos: [resolveImageUrl('images/TTLAPic1.jpg'), resolveImageUrl('images/TTLAPic2.jpg')],
    location: 'Góc Lặng Thầm Của NQA',
    tag: 'Tình Đơn Phương'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'jn-1',
    title: 'Gửi Em — Người con gái anh chỉ dám lặng thầm dõi theo',
    date: 'Tháng Năm Cất Giữ',
    excerpt: 'Yêu đơn phương là khi chỉ cần nhìn thấy nụ cười của em từ phía xa, lòng anh đã thấy bình yên đến lạ...',
    content: [
      'Người ta thường bảo tình yêu đơn phương mang nhiều nỗi buồn và tiếc nuối. Nhưng đối với Anh, được biết Em, được ngắm nhìn nụ cười trong veo và đôi mắt sáng của Em đã là một đặc ân của tuổi trẻ.',
      'Anh tạo nên góc nhỏ này không phải để đòi hỏi một danh phận, cũng không mong cầu một lời hồi đáp. Anh chỉ muốn có một chốn bình yên để cất giữ những khoảnh khắc đẹp nhất của Em — người con gái mà Anh luôn thầm ngưỡng mộ và trân quý.',
      'Chúc cho cô gái của tuổi 20 ấy mãi mãi giữ được nét hồn nhiên, luôn được che chở và gặp được những điều dịu dàng nhất trong cuộc đời.'
    ],
    coverUrl: resolveImageUrl('images/TTLAPic1.jpg'),
    tags: ['Gửi TTLA', 'Tình đơn phương', 'Lặng thầm'],
    readTime: '2 phút đọc'
  },
  {
    id: 'jn-2',
    title: 'Về chiếc bảng "HAPPY BIRTHDAY ANH ❤"',
    date: 'Kỷ Niệm Lắng Đọng',
    excerpt: 'Có thể đối với em đó chỉ là một lời chúc mừng ấm áp, nhưng với một người mang lòng tương tư, đó là ký ức đẹp nhất đời...',
    content: [
      'Buổi tối hôm ấy, khi nhìn thấy chiếc bảng đen nhỏ với nét phấn viết vội "HAPPY BIRTHDAY ANH ❤", tim Anh ngập tràn một cảm xúc khó tả — vừa biết ơn, vừa nghẹn ngào.',
      'Bọn mình không phải là một cặp đôi, chưa từng chính thức hẹn hò, nhưng sự quan tâm chân thành và nụ cười dịu dàng của Em khi ấy đã thắp sáng cả một ngày sinh nhật vốn rất đỗi bình thường của Anh.',
      'Bức ảnh TTLAPic2 được lưu lại tại đây như một kỷ niệm vô giá: nhắc Anh nhớ rằng mình đã từng được đối xử dịu dàng bởi một người con gái tuyệt vời đến thế nào.'
    ],
    coverUrl: resolveImageUrl('images/TTLAPic2.jpg'),
    tags: ['Sinh nhật Anh', 'Kỷ niệm quý giá', 'Tri ân'],
    readTime: '3 phút đọc'
  },
  {
    id: 'jn-3',
    title: 'Góc Của NQA — Người đứng sau ống kính',
    date: 'Tâm Sự Của Anh',
    excerpt: 'Khung ảnh của Anh để trống nền trắng, như khoảng lặng bình yên dõi theo bước chân em...',
    content: [
      'Khung ảnh của NQA được để trống nền trắng tinh khôi, bởi vì trong câu chuyện này, Anh luôn chọn đứng ở góc khuất phía sau ống kính để ngắm nhìn Em toả sáng.',
      'Không cần phải đứng cạnh nhau trong một khung hình, chỉ cần biết Em vẫn đang mỉm cười và hạnh phúc ở một nơi nào đó, người đứng sau như Anh đã cảm thấy an lòng.',
      'Những năm tháng thanh xuân này, được thương một người hết lòng dù chỉ trong im lặng, cũng là một điều đáng để cất giữ mãi về sau.'
    ],
    coverUrl: '',
    tags: ['Tự sự NQA', 'Người dõi theo', 'Thanh xuân'],
    readTime: '2 phút đọc'
  }
];
