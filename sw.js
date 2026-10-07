var CACHE_NAME = 'biloba-v1';
var urlsToCache = [
  './',
  './index.html',
  './style.css',
];

// Installation du Service Worker et mise en cache des fichiers de base
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Interception des requêtes : sert le cache si disponible, sinon cherche sur le réseau
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});