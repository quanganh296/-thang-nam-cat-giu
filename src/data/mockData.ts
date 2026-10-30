import { Album, Photo, TimelineEvent, JournalEntry } from '../types';

export const ALBUMS: Album[] = [
  {
    id: 'nhung-ngay-thang-ay',
    title: 'Những Ngày Tháng Ấy',
    description: 'Năm tháng tuổi trẻ như một cơn mưa rào, dù có bị cảm lạnh ta vẫn muốn đắm mình trong cơn mưa ấy lần nữa.',
    coverUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    dateRange: '2023 — 2024',
    photoCount: 6,
    theme: 'Tuổi trẻ & Phiêu lưu'
  },
  {
    id: 'khoanh-khac-binh-yen',
    title: 'Khoảnh Khắc Bình Yên',
    description: 'Tách cà phê sớm mai, góc phố vắng lặng sau cơn mưa và tiếng gió rì rào qua kẽ lá.',
    coverUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    dateRange: '2024 — 2025',
    photoCount: 6,
    theme: 'Tĩnh lặng & Thường nhật'
  },
  {
    id: 'anh-nang-cuoi-chieu',
    title: 'Ánh Nắng Cuối Chiều',
    description: 'Khoảnh khắc hoàng hôn nhuộm vàng mặt nước, khi ngày tàn nhường chỗ cho những suy tư sâu lắng.',
    coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    dateRange: '2025 — 2026',
    photoCount: 5,
    theme: 'Hoàng hôn & Ánh sáng'
  },
  {
    id: 'nhung-dieu-muon-nho',
    title: 'Những Điều Muốn Nhớ',
    description: 'Một nhành hoa dại bên thềm, tấm vé tàu cũ, trang sách gập dở và những mẩu chuyện không tên.',
    coverUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80',
    dateRange: '2026',
    photoCount: 5,
    theme: 'Chi tiết & Kỷ vật'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p-1',
    title: 'Góc Ban Công Ban Mai',
    caption: 'Tia nắng đầu ngày xuyên qua rèm cửa, mang theo mùi hương của ngày mới và hơi ấm dịu dàng.',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    date: '14/04/2024',
    location: 'Hà Nội',
    albumId: 'khoanh-khac-binh-yen',
    albumName: 'Khoảnh Khắc Bình Yên',
    tags: ['Nắng sớm', 'Cà phê', 'Thong thả'],
    featured: true,
    aspect: 'portrait',
    filmStock: 'Kodak Portra 400'
  },
  {
    id: 'p-2',
    title: 'Hoàng Hôn Trên Bến Vắng',
    caption: 'Khi vầng thái dương từ từ chìm xuống đường chân trời, mọi ồn ào đô thị dường như tan biến.',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    date: '02/09/2025',
    location: 'Phú Quốc',
    albumId: 'anh-nang-cuoi-chieu',
    albumName: 'Ánh Nắng Cuối Chiều',
    tags: ['Hoàng hôn', 'Biển', 'Tĩnh mịch'],
    featured: true,
    aspect: 'landscape',
    filmStock: 'Cinestill 800T'
  },
  {
    id: 'p-3',
    title: 'Chiếc Máy Ảnh Cũ & Cuộn Film',
    caption: 'Chiếc máy cơ từng cùng ta qua bao nẻo đường, mỗi lần bấm cò là một lần khắc ghi thời gian.',
    url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
    date: '18/11/2023',
    location: 'Đà Lạt',
    albumId: 'nhung-ngay-thang-ay',
    albumName: 'Những Ngày Tháng Ấy',
    tags: ['Máy ảnh', 'Hoài niệm', 'Ảnh film'],
    featured: true,
    aspect: 'square',
    filmStock: 'Fujicolor C200'
  },
  {
    id: 'p-4',
    title: 'Những Bông Cúc Họa Mi Đầu Mùa',
    caption: 'Một nhành hoa nhỏ bên ly trà ấm, nhắc nhở ta rằng vẻ đẹp giản dị nhất luôn ở ngay bên cạnh.',
    url: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80',
    date: '20/10/2026',
    location: 'Hà Nội',
    albumId: 'nhung-dieu-muon-nho',
    albumName: 'Những Điều Muốn Nhớ',
    tags: ['Hoa dại', 'Mùa thu', 'Trà chiều'],
    featured: true,
    aspect: 'portrait',
    filmStock: 'Kodak Gold 200'
  },
  {
    id: 'p-5',
    title: 'Chuyến Tàu Chiều Ra Ngoại Ô',
    caption: 'Tiếng còi tàu vọng lại từ ga nhỏ, những ô cửa sổ lướt qua cánh đồng bát ngát rợp bóng mây.',
    url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    date: '15/03/2024',
    location: 'Huế',
    albumId: 'nhung-ngay-thang-ay',
    albumName: 'Những Ngày Tháng Ấy',
    tags: ['Đường sắt', 'Hành trình', 'Chuyến đi'],
    featured: false,
    aspect: 'landscape',
    filmStock: 'Ilford HP5 Plus'
  },
  {
    id: 'p-6',
    title: 'Trang Sách Cũ Dưới Giàn Hoa',
    caption: 'Đọc lại những trang sách yêu thích khi bóng nắng nghiêng dài, thời gian như ngưng đọng.',
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    date: '05/06/2025',
    location: 'Hội An',
    albumId: 'khoanh-khac-binh-yen',
    albumName: 'Khoảnh Khắc Bình Yên',
    tags: ['Sách', 'Yên tĩnh', 'Mùa hạ'],
    featured: true,
    aspect: 'portrait',
    filmStock: 'Kodak Portra 160'
  },
  {
    id: 'p-7',
    title: 'Hồ Nước Mờ Sương Sáng Sớm',
    caption: 'Màn sương bồng bềnh phủ kín mặt hồ phẳng lặng như gương, chỉ có tiếng chim hót xa xăm.',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    date: '12/01/2025',
    location: 'Đà Lạt',
    albumId: 'anh-nang-cuoi-chieu',
    albumName: 'Ánh Nắng Cuối Chiều',
    tags: ['Hồ nước', 'Sương sớm', 'Thiên nhiên'],
    featured: false,
    aspect: 'landscape',
    filmStock: 'Fujifilm Pro 400H'
  },
  {
    id: 'p-8',
    title: 'Tấm Bưu Thiếp Từ Miền Xa',
    caption: 'Nét chữ viết tay mộc mạc gửi từ một thành phố xa lạ, mang theo cả bầu trời thương nhớ.',
    url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80',
    date: '28/08/2026',
    location: 'Sa Pa',
    albumId: 'nhung-dieu-muon-nho',
    albumName: 'Những Điều Muốn Nhớ',
    tags: ['Bưu thiếp', 'Kỷ niệm', 'Viết tay'],
    featured: false,
    aspect: 'square',
    filmStock: 'Kodak Tri-X 400'
  },
  {
    id: 'p-9',
    title: 'Đêm Phố Cổ Lên Đèn',
    caption: 'Những chiếc đèn lồng đỏ lung linh soi bóng dòng sông Hoài, một khúc ca êm dịu giữa đêm.',
    url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    date: '22/02/2024',
    location: 'Hội An',
    albumId: 'nhung-ngay-thang-ay',
    albumName: 'Những Ngày Tháng Ấy',
    tags: ['Đèn lồng', 'Phố cổ', 'Đêm'],
    featured: true,
    aspect: 'portrait',
    filmStock: 'Cinestill 800T'
  },
  {
    id: 'p-10',
    title: 'Cơn Mưa Chiều Trên Ô Cửa',
    caption: 'Hạt mưa tí tách gõ vào mặt kính, từng giọt nước lăn dài mang theo những suy nghĩ miên man.',
    url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
    date: '10/08/2025',
    location: 'Sài Gòn',
    albumId: 'khoanh-khac-binh-yen',
    albumName: 'Khoảnh Khắc Bình Yên',
    tags: ['Mưa', 'Cửa sổ', 'Tâm trạng'],
    featured: false,
    aspect: 'portrait',
    filmStock: 'Kodak Portra 800'
  },
  {
    id: 'p-11',
    title: 'Con Đường Nhỏ Lối Về Quê',
    caption: 'Hàng cây rợp bóng mát dẫn về ngôi nhà nhỏ thân thương, nơi khói lam chiều vương vấn đầu làng.',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    date: '30/04/2025',
    location: 'Ninh Bình',
    albumId: 'anh-nang-cuoi-chieu',
    albumName: 'Ánh Nắng Cuối Chiều',
    tags: ['Làng quê', 'Cây xanh', 'Bình yên'],
    featured: false,
    aspect: 'landscape',
    filmStock: 'Fujicolor Superia 200'
  },
  {
    id: 'p-12',
    title: 'Đóa Cúc Họa Mi Nở Muộn',
    caption: 'Dù mùa đông đã ngấp nghé bên thềm, bông hoa nhỏ vẫn kiên cường nở rộ dưới chút nắng hanh hao.',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    date: '15/10/2026',
    location: 'Mộc Châu',
    albumId: 'nhung-dieu-muon-nho',
    albumName: 'Những Điều Muốn Nhớ',
    tags: ['Đồi chè', 'Nắng hanh', 'Gió lộng'],
    featured: false,
    aspect: 'landscape',
    filmStock: 'Kodak Ektar 100'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1',
    date: '15 Tháng 10, 2026',
    monthYear: '10/2026',
    title: 'Mùa Cúc Họa Mi Trên Cao Nguyên',
    description: 'Chuyến đi ngẫu hứng cùng chiếc balo bạc màu. Khi đứng giữa đồi hoa bạt ngàn dưới gió lạnh, ta mới nhận ra hạnh phúc đôi khi đơn giản chỉ là được hít thở thật sâu bầu không khí trong trẻo ấy.',
    photos: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Mộc Châu',
    tag: 'Chuyến Đi'
  },
  {
    id: 'tl-2',
    date: '02 Tháng 09, 2025',
    monthYear: '09/2025',
    title: 'Ánh Chiều Rực Rỡ Bên Biển Vắng',
    description: 'Buổi chiều muộn khi sóng biển xô nhẹ vào bờ cát mịn. Ta ngồi lặng yên ngắm hoàng hôn đỏ ối đang lặn dần, lưu lại tấm hình này để tự dặn lòng: Sau cơn bão, bầu trời rồi sẽ lại bình yên.',
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Phú Quốc',
    tag: 'Hoàng Hôn'
  },
  {
    id: 'tl-3',
    date: '10 Tháng 08, 2025',
    monthYear: '08/2025',
    title: 'Cơn Mưa Rào Tháng Tám',
    description: 'Ngồi trong quán cà phê quen thuộc nhìn phố xá ướt đẫm qua ô cửa kính. Tiếng nhạc jazz dịu êm hòa cùng tiếng sấm đầu mùa, thấy lòng nhẹ nhõm như được gột rửa mọi ưu phiền.',
    photos: [
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Sài Gòn',
    tag: 'Bình Yên'
  },
  {
    id: 'tl-4',
    date: '15 Tháng 03, 2024',
    monthYear: '03/2024',
    title: 'Chuyến Tàu Bắc Nam Qua Miền Di Sản',
    description: 'Nhịp đập xình xịch của bánh xe lửa trên đường ray, từng dải đồng quê, ngọn núi và khúc sông trôi qua bên ngoài cửa sổ như thước phim quay chậm của cuộc đời.',
    photos: [
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Huế — Hội An',
    tag: 'Kỷ Niệm'
  },
  {
    id: 'tl-5',
    date: '18 Tháng 11, 2023',
    monthYear: '11/2023',
    title: 'Khởi Đầu Cùng Cuộn Film Đầu Tiên',
    description: 'Ngày đầu tiên cầm trên tay chiếc máy ảnh cơ cũ mua lại từ một tiệm đồ cổ. Từng vòng xoay lấy nét cơ học, từng tiếng màn trập đanh giòn mở ra một cách nhìn mới về thế giới xung quanh.',
    photos: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Đà Lạt',
    tag: 'Khởi Đầu'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'jn-1',
    title: 'Giữ lại chút nắng trên cuộn film',
    date: '28 Tháng 10, 2026',
    excerpt: 'Người ta thường nói ảnh film có linh hồn, có lẽ bởi vì mỗi lần nhấn chụp là một sự đánh đổi của thời gian và lòng kiên nhẫn...',
    content: [
      'Trong thời đại mà chỉ cần một cú chạm màn hình điện thoại là có ngay hàng chục bức ảnh hoàn hảo, chụp ảnh film giống như một lời khước từ sự vội vã. Bạn không thể biết ngay tấm hình vừa chụp trông ra sao, bạn phải kiên nhẫn đợi đến khi cuộn film được tráng xong trong phòng tối.',
      'Chính sự chờ đợi đó khiến từng khoảnh khắc trở nên quý giá hơn bội phần. Ánh sáng lọt vào thấu kính, những hạt grain lấm tấm không hoàn hảo, và sắc màu ấm áp tựa như ký ức của chính ta — có phần mờ ảo nhưng luôn chan chứa tình cảm.',
      'Tháng Năm Cất Giữ không phải là nơi lưu giữ những bức ảnh hoàn mỹ nhất, mà là nơi cất giấu những khoảnh khắc chân thực nhất của một chặng đường đã qua.'
    ],
    coverUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tags: ['Chiêm nghiệm', 'Ảnh film', 'Thời gian'],
    readTime: '3 phút đọc'
  },
  {
    id: 'jn-2',
    title: 'Về một buổi chiều không có lịch hẹn',
    date: '12 Tháng 09, 2025',
    excerpt: 'Hôm nay ta tự cho phép mình buông bỏ danh sách công việc dày đặc để bước ra đường mà không có bất kỳ điểm đến cụ thể nào...',
    content: [
      'Ghé vào một góc cà phê nhỏ quen thuộc nép mình dưới giàn hoa giấy. Người pha chế nhận ra ta và mang ra tách nâu đá như thường lệ. Không điện thoại, không thông báo gấp gáp, chỉ có cuốn sổ tay nhỏ và tiếng lá khô xào xạc theo từng cơn gió.',
      'Đôi khi, điều xa xỉ nhất trong cuộc sống hiện đại lại chính là sự trống rỗng trong lịch trình — một khoảng lặng để tâm hồn được hít thở và tái tạo năng lượng.',
      'Khi ta chậm lại, những chi tiết tưởng chừng nhỏ bé lại hiện lên sống động: vệt nắng vắt ngang chiếc bàn gỗ, mùi cà phê mới xay thoảng qua cánh mũi, và nụ cười bình thản của những người qua đường.'
    ],
    coverUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    tags: ['Thong thả', 'Cà phê', 'Bình yên'],
    readTime: '2 phút đọc'
  },
  {
    id: 'jn-3',
    title: 'Những chuyến tàu mang tên tuổi trẻ',
    date: '24 Tháng 04, 2024',
    excerpt: 'Điểm đến có thực sự quan trọng, hay chính con đường ta đi qua mới là điều còn đọng lại sâu sắc nhất?',
    content: [
      'Ngồi bên khung cửa sổ tàu hỏa ngắm nhìn dải đất hình chữ S trôi dần về phía sau. Từng ngọn đồi chè xanh mướt, những rặng phi lao ven biển rì rào trong gió, và những mái nhà ngói đỏ nghi ngút khói lam chiều.',
      'Tuổi trẻ có thể nhiều bỡ ngỡ và chông chênh, nhưng đó là khoảng thời gian duy nhất ta dám xách balo lên và đi mà không cần nghĩ ngợi quá nhiều về ngày mai.',
      'Mỗi bức ảnh lưu lại trong chuyến đi ấy là một mảnh ghép của tuổi xuân — một minh chứng sống động rằng ta đã từng sống hết mình và dũng cảm theo đuổi ước mơ.'
    ],
    coverUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Du hành', 'Kỷ niệm', 'Tuổi trẻ'],
    readTime: '4 phút đọc'
  }
];
