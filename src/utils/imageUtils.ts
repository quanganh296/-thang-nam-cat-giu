/**
 * Utility functions for image URL resolution and photo handling
 */

/**
 * Resolves an image path taking into account Vite's base path for GitHub Pages.
 */
export function resolveImageUrl(url: string | undefined): string {
  if (!url) return '';
  // Remote URLs, blob URLs, data URLs are returned as-is
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  // Strip leading slash
  const cleanPath = url.replace(/^\/+/, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
