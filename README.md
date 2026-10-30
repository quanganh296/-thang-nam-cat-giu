# Tháng Năm Cất Giữ — Photo Journal & Memories

> *“Có những tháng năm, ta muốn cất giữ bằng những bức ảnh.”*

Website cá nhân lưu giữ hình ảnh, album ảnh film, dòng thời gian và ghi chú hoài niệm. Dự án được xây dựng với tinh thần hoài niệm, tối giản, tinh tế mang hơi hướng điện ảnh và chất liệu ảnh film.

---

## 📸 Giới Thiệu Dự Án

* **Website Public:** [https://quanganh296.github.io/-thang-nam-cat-giu/](https://quanganh296.github.io/-thang-nam-cat-giu/)
* **Repository GitHub:** [https://github.com/quanganh296/-thang-nam-cat-giu](https://github.com/quanganh296/-thang-nam-cat-giu)
* **Công nghệ cốt lõi:** React 18, TypeScript, Vite, Vanilla CSS Design System, GitHub Actions, GitHub Pages.

---

## 🎨 Bảng Màu & Thẩm Mỹ

* **Cream:** `#F5F0E8`
* **Beige:** `#E7DCCB`
* **Warm Brown:** `#A58B70`
* **Blue Gray:** `#737B83`
* **Dark Charcoal:** `#292B2F`

Phông chữ tiêu đề serif hoài niệm (*Playfair Display*, *Cormorant Garamond*), phông nội dung hiện đại dễ đọc (*Plus Jakarta Sans*), hạt film grain texture nhẹ nhàng.

---

## 📁 Cấu Trúc Dự Án

```text
D:\ImportantHeart
├── public/                 # Tài nguyên tĩnh (favicon, hình ảnh)
│   ├── images/             # Thư mục lưu trữ hình ảnh tải lên
│   └── favicon.svg         # Favicon logo máy ảnh cổ điển
├── src/
│   ├── components/         # Các thành phần tái sử dụng
│   │   ├── Navbar.tsx      # Thanh điều hướng & chế độ lắng đọng
│   │   ├── Footer.tsx      # Chân trang & liên kết điều hướng
│   │   ├── Lightbox.tsx    # Trình xem ảnh phóng to toàn màn hình
│   │   ├── PhotoCard.tsx   # Thẻ ảnh Polaroid & Editorial
│   │   └── AlbumCard.tsx   # Thẻ bìa album
│   ├── pages/              # Các trang chính
│   │   ├── HomePage.tsx    # Trang chủ với Hero, album nổi bật, nhật ký
│   │   ├── GalleryPage.tsx # Thư viện ảnh đầy đủ (bộ lọc, tìm kiếm, tag)
│   │   ├── AlbumsPage.tsx  # Danh sách và chi tiết từng Album
│   │   ├── TimelinePage.tsx# Dòng thời gian hồi ức theo năm tháng
│   │   ├── JournalPage.tsx # Nhật ký & suy tư chân thật
│   │   └── AboutPage.tsx   # Câu chuyện & triết lý thiết kế
│   ├── data/
│   │   └── mockData.ts     # Dữ liệu album, ảnh, dòng thời gian, nhật ký
│   ├── types/
│   │   └── index.ts        # Định nghĩa kiểu dữ liệu TypeScript
│   ├── styles/
│   │   └── main.css        # Hệ thống CSS Design System hoàn chỉnh
│   ├── App.tsx             # Điều hướng router và quản lý Lightbox
│   └── main.tsx            # Điểm khởi chạy React
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD tự động deploy lên GitHub Pages
├── .gitignore
├── index.html              # HTML chuẩn SEO tiếng Việt
├── package.json            # Cấu hình dependency & scripts
├── tsconfig.json           # Cấu hình TypeScript
├── vite.config.ts          # Cấu hình Vite với base /-thang-nam-cat-giu/
└── README.md
```

---

## 🛠️ Hướng Dẫn Quản Lý Ảnh & Dữ Liệu

Toàn bộ dữ liệu của website được định nghĩa có kiểu TypeScript chặt chẽ tại `src/data/mockData.ts`.

### 1. Thêm ảnh mới vào thư viện
* Đặt file ảnh của bạn vào thư mục `public/images/` hoặc sử dụng đường dẫn ảnh trực tuyến.
* Mở file `src/data/mockData.ts`, thêm đối tượng mới vào mảng `PHOTOS`:
  ```ts
  {
    id: 'p-13',
    title: 'Tiêu đề bức ảnh',
    caption: 'Mô tả ngắn giàu cảm xúc...',
    url: './images/ten-anh-cua-ban.jpg', // hoặc URL online
    date: '29/10/2026',
    location: 'Hà Nội',
    albumId: 'khoanh-khac-binh-yen',
    albumName: 'Khoảnh Khắc Bình Yên',
    tags: ['Nắng', 'Cà phê'],
    featured: true,
    aspect: 'portrait', // 'portrait' | 'landscape' | 'square'
    filmStock: 'Kodak Portra 400'
  }
  ```

### 2. Tạo album mới
* Trong file `src/data/mockData.ts`, thêm vào mảng `ALBUMS`:
  ```ts
  {
    id: 'ten-album-slug',
    title: 'Tên Album Mới',
    description: 'Lời tựa ngắn cho album...',
    coverUrl: 'https://...',
    dateRange: '2026',
    photoCount: 5,
    theme: 'Chủ đề album'
  }
  ```

### 3. Thêm sự kiện vào Dòng thời gian (Timeline)
* Trong `src/data/mockData.ts`, thêm vào mảng `TIMELINE_EVENTS`:
  ```ts
  {
    id: 'tl-6',
    date: '29 Tháng 10, 2026',
    monthYear: '10/2026',
    title: 'Tên cột mốc kỷ niệm',
    description: 'Đoạn văn tự sự về ngày hôm ấy...',
    photos: ['url-anh-1', 'url-anh-2'],
    location: 'Đà Lạt',
    tag: 'Kỷ Niệm'
  }
  ```

### 4. Thêm bài viết Nhật ký (Journal)
* Trong `src/data/mockData.ts`, thêm vào mảng `JOURNAL_ENTRIES`:
  ```ts
  {
    id: 'jn-4',
    title: 'Tựa đề bài viết',
    date: '29 Tháng 10, 2026',
    excerpt: 'Đoạn tóm tắt ngắn...',
    content: [
      'Đoạn văn thứ nhất...',
      'Đoạn văn thứ hai...'
    ],
    coverUrl: 'https://...',
    tags: ['Tự sự', 'Thời gian'],
    readTime: '3 phút đọc'
  }
  ```

---

## 💻 Hướng Dẫn Chạy Local & Build

Trong thư mục `D:\ImportantHeart`:

```powershell
# Cài đặt thư viện với cache cục bộ
npm --cache "D:\ImportantHeart\.cache\npm" install

# Khởi chạy máy chủ phát triển (Development Server)
npm run dev

# Kiểm tra TypeScript và build production
npm run build

# Xem thử bản build production (Preview)
npm run preview
```

---

## 🚀 Triển Khai Lên GitHub Pages

Dự án đã tích hợp sẵn GitHub Actions workflow tại `.github/workflows/deploy.yml`.

Khi bạn `git push` lên nhánh `main`, GitHub Actions sẽ tự động:
1. Chạy `npm ci` cài đặt chính xác dependencies từ `package-lock.json`.
2. Kiểm tra TypeScript và chạy `npm run build` tạo bundle production tại thư mục `dist`.
3. Tự động xuất bản lên GitHub Pages tại:
   `https://quanganh296.github.io/-thang-nam-cat-giu/`
