import React, { useState } from 'react';
import { NavigationTab, Photo } from './types';
import { ALBUMS, PHOTOS, TIMELINE_EVENTS, JOURNAL_ENTRIES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';

import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { TimelinePage } from './pages/TimelinePage';
import { JournalPage } from './pages/JournalPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [selectedGalleryAlbum, setSelectedGalleryAlbum] = useState<string>('all');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState<Photo[]>(PHOTOS);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handleOpenLightbox = (photosList: Photo[], index: number) => {
    setLightboxPhotos(photosList);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenLightboxByUrl = (photoUrl: string) => {
    const foundIndex = PHOTOS.findIndex((p) => p.url === photoUrl);
    if (foundIndex >= 0) {
      setLightboxPhotos(PHOTOS);
      setLightboxIndex(foundIndex);
    } else {
      // Temporary single-photo preview
      const tempPhoto: Photo = {
        id: 'temp-preview',
        title: 'Bức ảnh kỷ niệm',
        caption: 'Khoảnh khắc được ghi lại trên dòng thời gian.',
        url: photoUrl,
        date: 'Kỷ niệm',
        location: 'Việt Nam',
        albumId: 'all',
        albumName: 'Dòng thời gian',
        tags: ['Kỷ niệm']
      };
      setLightboxPhotos([tempPhoto]);
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxPhotos.length);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  };

  const handleNavigateToAlbumGallery = (albumId: string) => {
    setSelectedGalleryAlbum(albumId);
    setActiveTab('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'gallery' && activeTab !== 'gallery') {
            setSelectedGalleryAlbum('all');
          }
          setActiveTab(tab);
        }}
      />

      {/* Main Content Router */}
      <main id="main-content">
        {activeTab === 'home' && (
          <HomePage
            albums={ALBUMS}
            photos={PHOTOS}
            journals={JOURNAL_ENTRIES}
            onNavigate={(tab) => setActiveTab(tab)}
            onSelectAlbum={handleNavigateToAlbumGallery}
            onOpenLightbox={(idx) => handleOpenLightbox(PHOTOS, idx)}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage
            photos={PHOTOS}
            albums={ALBUMS}
            initialAlbumId={selectedGalleryAlbum}
            onOpenLightbox={(filtered, idx) => handleOpenLightbox(filtered, idx)}
          />
        )}

        {activeTab === 'albums' && (
          <AlbumsPage
            albums={ALBUMS}
            photos={PHOTOS}
            onOpenLightbox={(filtered, idx) => handleOpenLightbox(filtered, idx)}
            onNavigateToGallery={handleNavigateToAlbumGallery}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelinePage
            events={TIMELINE_EVENTS}
            photos={PHOTOS}
            onOpenLightboxByUrl={handleOpenLightboxByUrl}
          />
        )}

        {activeTab === 'journal' && (
          <JournalPage entries={JOURNAL_ENTRIES} />
        )}

        {activeTab === 'about' && (
          <AboutPage onNavigate={(tab) => setActiveTab(tab)} />
        )}
      </main>

      {/* Lightbox Modal */}
      <Lightbox
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Global Footer */}
      <Footer onTabChange={(tab) => setActiveTab(tab)} />
    </div>
  );
};
export default App;
