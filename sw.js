const CACHE_NAME = 'atal-v1';
const urlsToCache = [
  '/atal-logistics/',
  '/atal-logistics/index.html',
  '/atal-logistics/style.css',
  '/atal-logistics/config.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
