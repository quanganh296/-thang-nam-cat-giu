import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.resolve(rootDir, 'public', 'images');
const outputDir = path.resolve(rootDir, 'src', 'data');
const outputFile = path.resolve(outputDir, 'autoPhotos.json');

// Supported image extensions
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export function scanAndGenerateManifest() {
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()));

  const ttlaPhotos = [];
  const nqaPhotos = [];
  const otherPhotos = [];

  for (const filename of imageFiles) {
    const ext = path.extname(filename);
    const baseName = path.basename(filename, ext);

    // TTLA Pattern: starts with TTLAPic (followed by optional sequence number)
    const ttlaMatch = baseName.match(/^TTLAPic(\d*)$/i);
    if (ttlaMatch) {
      const order = ttlaMatch[1] ? parseInt(ttlaMatch[1], 10) : 999;
      ttlaPhotos.push({ filename, baseName, order, ext });
      continue;
    }

    // NQA Pattern: starts with NQA (followed by optional sequence number)
    const nqaMatch = baseName.match(/^NQA(\d*)$/i);
    if (nqaMatch) {
      const order = nqaMatch[1] ? parseInt(nqaMatch[1], 10) : 999;
      nqaPhotos.push({ filename, baseName, order, ext });
      continue;
    }

    otherPhotos.push({ filename, baseName, order: 999, ext });
  }

  // Sort sequentially
  ttlaPhotos.sort((a, b) => a.order - b.order);
  nqaPhotos.sort((a, b) => a.order - b.order);

  const photosList = [];

  // Story annotations reflecting unrequited, tender, silent devotion
  const knownStory = {
    ttla: {
      1: {
        title: 'Nàng Thơ Tuổi 20 — TTLAPic1',
        caption: 'Nụ cười rạng ngời và ánh mắt trong trẻo của người con gái tôi thầm thương trong ngày sinh nhật tuổi 20. Đứng từ phía sau ngắm nhìn, chỉ cầu mong em luôn an yên và rạng rỡ như thế.',
        albumId: 'goc-cua-em',
        albumName: 'Nụ Cười Của Nàng (TTLA)',
        tags: ['TTLA', 'Tuổi 20', 'Nàng thơ', 'Thầm thương'],
        location: 'Hà Nội',
        date: 'Sinh nhật tuổi 20',
        featured: true,
        filmStock: 'Kodak Portra 400',
        aspect: 'portrait'
      },
      2: {
        title: 'Bữa Tối "Happy Birthday Anh ❤" — TTLAPic2',
        caption: 'Bữa tối sinh nhật ấm áp cùng chiếc bảng gỗ xinh xắn Em chuẩn bị chúc mừng Anh. Dù chỉ là một khoảnh khắc giản dị, với một người yêu đơn phương như Anh, đây là kỷ niệm dịu dàng và quý giá nhất đời.',
        albumId: 'ky-niem-ben-em',
        albumName: 'Kỷ Niệm Từng Có',
        tags: ['TTLA', 'Sinh nhật Anh', 'Kỷ niệm quý giá', 'Lắng đọng'],
        location: 'Hà Nội',
        date: 'Sinh nhật Anh',
        featured: true,
        filmStock: 'Cinestill 800T',
        aspect: 'portrait'
      }
    }
  };

  // 1. Process TTLA photos
  ttlaPhotos.forEach((item) => {
    const meta = knownStory.ttla[item.order] || {
      title: `Bóng Hình Của Nàng — TTLAPic${item.order || item.baseName}`,
      caption: `Khoảnh khắc dịu dàng của người con gái tôi thầm thương, được lặng thầm cất giữ trong năm tháng.`,
      albumId: 'goc-cua-em',
      albumName: 'Nụ Cười Của Nàng (TTLA)',
      tags: ['TTLA', 'Nụ cười', 'Lặng thầm'],
      location: 'Hà Nội',
      date: 'Kỷ niệm cất giữ',
      featured: item.order <= 2,
      filmStock: 'Kodak Gold 200',
      aspect: 'portrait'
    };

    photosList.push({
      id: `photo-ttla-${item.order || item.baseName}`,
      title: meta.title,
      caption: meta.caption,
      url: `images/${item.filename}`,
      date: meta.date,
      location: meta.location,
      albumId: meta.albumId,
      albumName: meta.albumName,
      tags: meta.tags,
      featured: meta.featured,
      aspect: meta.aspect || 'portrait',
      filmStock: meta.filmStock,
      subject: 'ttla',
      isPlaceholder: false,
      sequenceNumber: item.order
    });
  });

  // 2. Process NQA photos
  if (nqaPhotos.length > 0) {
    nqaPhotos.forEach((item) => {
      photosList.push({
        id: `photo-nqa-${item.order || item.baseName}`,
        title: `Chân Dung NQA — NQA${item.order || item.baseName}`,
        caption: `Khoảnh khắc của chàng trai, người lặng lẽ đứng từ xa để dõi theo và chúc phúc cho Em.`,
        url: `images/${item.filename}`,
        date: 'Kỷ niệm',
        location: 'Hà Nội',
        albumId: 'goc-cua-anh',
        albumName: 'Góc Của NQA (Người Lặng Thầm)',
        tags: ['NQA', 'Lặng thầm', 'Tự sự'],
        featured: item.order === 1,
        aspect: 'portrait',
        filmStock: 'Fujifilm Pro 400H',
        subject: 'nqa',
        isPlaceholder: false,
        sequenceNumber: item.order
      });
    });
  } else {
    // White placeholder for NQA
    photosList.push({
      id: 'photo-nqa-placeholder-1',
      title: 'Góc Của NQA (Người Lặng Thầm Dõi Theo)',
      caption: 'Khung ảnh dành cho người đứng sau ống kính. Hiện đang để trống đón chờ bức ảnh đầu tiên (NQA1.jpg)...',
      url: '',
      date: 'Chờ đón',
      location: 'Góc lặng thầm',
      albumId: 'goc-cua-anh',
      albumName: 'Góc Của NQA (Người Lặng Thầm)',
      tags: ['NQA', 'Lặng thầm', 'Chờ đón'],
      featured: true,
      aspect: 'portrait',
      filmStock: 'Khung ảnh trắng',
      subject: 'nqa',
      isPlaceholder: true,
      sequenceNumber: 1
    });
  }

  // 3. Process any other photos
  otherPhotos.forEach((item, idx) => {
    photosList.push({
      id: `photo-other-${idx + 1}`,
      title: `Khoảnh Khắc Kỷ Niệm — ${item.baseName}`,
      caption: `Mảnh ghép thời gian lưu lại một thời thanh xuân biết thương một người.`,
      url: `images/${item.filename}`,
      date: 'Kỷ niệm',
      location: 'Hà Nội',
      albumId: 'ky-niem-ben-em',
      albumName: 'Kỷ Niệm Từng Có',
      tags: ['Kỷ niệm', 'Thanh xuân'],
      featured: false,
      aspect: 'portrait',
      filmStock: 'Ilford HP5',
      subject: 'couple',
      isPlaceholder: false,
      sequenceNumber: idx + 1
    });
  });

  const manifest = {
    updatedAt: new Date().toISOString(),
    ttlaCount: ttlaPhotos.length,
    nqaCount: nqaPhotos.length,
    otherCount: otherPhotos.length,
    totalCount: photosList.length,
    photos: photosList
  };

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`[Photo Manifest] Generated ${manifest.photos.length} photos (${ttlaPhotos.length} TTLA, ${nqaPhotos.length} NQA, ${otherPhotos.length} others). Saved to ${outputFile}`);
  return manifest;
}

// Auto-run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  scanAndGenerateManifest();
}
