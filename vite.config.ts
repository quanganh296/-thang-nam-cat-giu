import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { scanAndGenerateManifest } from './scripts/generatePhotosManifest.js';

function autoPhotoWatcherPlugin(): Plugin {
  return {
    name: 'auto-photo-watcher',
    buildStart() {
      scanAndGenerateManifest();
    },
    configureServer(server) {
      scanAndGenerateManifest();
      const imagesPath = path.resolve(__dirname, 'public/images');
      server.watcher.add(imagesPath);
      server.watcher.on('all', (event, filePath) => {
        if (filePath.includes('public/images') || filePath.includes('public\\images')) {
          console.log(`[Photo Watcher] Detected ${event} on ${path.basename(filePath)}. Regenerating autoPhotos.json...`);
          scanAndGenerateManifest();
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), autoPhotoWatcherPlugin()],
  base: '/-thang-nam-cat-giu/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});

