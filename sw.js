// A simple service worker to satisfy PWA install requirements.
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // We aren't caching anything for offline use because this app relies on live API data.
    // We just pass the network requests right through.
    return;
});