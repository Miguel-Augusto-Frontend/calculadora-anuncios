const CACHE_NAME = 'calc-anuncios-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon.png',
  './manifest.json',
  './style.css', // se você separar CSS
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
