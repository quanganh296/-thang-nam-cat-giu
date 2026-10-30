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

  // Story annotations for known photos
  const knownStory = {
    ttla: {
      1: {
        title: 'Nàng Thơ Tuổi 20 — TTLAPic1',
        caption: 'Nụ cười rạng ngời và ánh mắt trong trẻo của người con gái anh yêu trong ngày sinh nhật tuổi 20, tựa như một đóa hoa thơm ngát giữa nắng ban mai.',
        albumId: 'goc-cua-em',
        albumName: 'Nụ Cười Của Em (TTLA)',
        tags: ['TTLA', 'Tuổi 20', 'Nàng thơ', 'Nụ cười'],
        location: 'Hà Nội',
        date: 'Sinh nhật tuổi 20',
        featured: true,
        filmStock: 'Kodak Portra 400',
        aspect: 'portrait'
      },
      2: {
        title: 'Bữa Tối "Happy Birthday Anh ❤" — TTLAPic2',
        caption: 'Bữa tối ấm cúng cùng chiếc bảng xinh xắn Em chuẩn bị mừng sinh nhật Anh. Ánh mắt dịu dàng ngước nhìn qua bàn ăn là món quà vô giá nhất mà cuộc đời trao tặng cho Anh.',
        albumId: 'ngay-ben-nhau',
        albumName: 'Những Ngày Bên Nhau',
        tags: ['TTLA', 'Sinh nhật Anh', 'Hẹn hò', 'Kỷ niệm'],
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
      title: `Nụ Cười Của Em — TTLAPic${item.order || item.baseName}`,
      caption: `Khoảnh khắc dịu dàng của người con gái anh yêu, được cất giữ trọn vẹn trong năm tháng.`,
      albumId: 'goc-cua-em',
      albumName: 'Nụ Cười Của Em (TTLA)',
      tags: ['TTLA', 'Nụ cười', 'Kỷ niệm'],
      location: 'Hà Nội',
      date: 'Kỷ niệm ngọt ngào',
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
        caption: `Khoảnh khắc của chàng trai, người nguyện cất giữ mọi yêu thương trao trọn về Em.`,
        url: `images/${item.filename}`,
        date: 'Kỷ niệm',
        location: 'Hà Nội',
        albumId: 'goc-cua-anh',
        albumName: 'Góc Của NQA',
        tags: ['NQA', 'Chàng trai', 'Kỷ niệm'],
        featured: item.order === 1,
        aspect: 'portrait',
        filmStock: 'Fujifilm Pro 400H',
        subject: 'nqa',
        isPlaceholder: false,
        sequenceNumber: item.order
      });
    });
  } else {
    // As explicitly requested: NQA photos don't exist yet, so provide blank/white placeholder frame
    photosList.push({
      id: 'photo-nqa-placeholder-1',
      title: 'Góc Của NQA (Đang Chờ Ảnh)',
      caption: 'Khung ảnh dành riêng cho chàng trai. Đang để trống đón chờ bức ảnh đầu tiên (NQA1.jpg)...',
      url: '',
      date: 'Chờ đón',
      location: 'Góc của Anh',
      albumId: 'goc-cua-anh',
      albumName: 'Góc Của NQA',
      tags: ['NQA', 'Chàng trai', 'Chờ đón'],
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
      caption: `Mảnh ghép thời gian lưu giữ hành trình yêu thương.`,
      url: `images/${item.filename}`,
      date: 'Kỷ niệm',
      location: 'Hà Nội',
      albumId: 'ngay-ben-nhau',
      albumName: 'Những Ngày Bên Nhau',
      tags: ['Kỷ niệm', 'Chúng ta'],
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
  console.log(`[Photo Manifest] Successfully generated ${manifest.photos.length} photos (${ttlaPhotos.length} TTLA, ${nqaPhotos.length} NQA, ${otherPhotos.length} others). Saved to ${outputFile}`);
  return manifest;
}

// Auto-run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  scanAndGenerateManifest();
}
