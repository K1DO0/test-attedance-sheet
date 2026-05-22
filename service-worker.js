const CACHE_NAME = 'optiwork-attendance-v20260522-final';
const ASSETS = ['./', './index.html', './style.css?v=20260522-final', './script.js?v=20260522-final', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => fetch(event.request).catch(() => cached)));
});
