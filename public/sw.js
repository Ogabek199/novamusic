const CACHE_NAME = 'novamusic-pwa-v5';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icons/apple-touch-icon-180.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/icons/favicon-32.png'
];

// O'rnatish bosqichi - App Shell'ni keshga yuklash
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Faollashish bosqichi - Eski kesh versiyalarini tozalash
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// SKIP_WAITING xabari kelganda darhol faollashish
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// So'rovlarni tutib olish (Fetch)
self.addEventListener('fetch', (event) => {
  // Faqat GET so'rovlarni keshlaymiz
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);

  // 1. Sahifaga kirish (HTML / Navigatsiya): Network-First
  // Yangi update chiqqanda har doim serverdan eng yangi HTML olinadi!
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  // 2. YouTube Data API so'rovlari: Network-First (oflaynda keshdan olish)
  if (requestUrl.hostname.includes('googleapis.com')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // 3. YouTube IFrame API va tashqi media resurslar
  if (requestUrl.hostname.includes('youtube.com') || requestUrl.hostname.includes('ytimg.com')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // 4. Mahalliy statik aktivlar (JS, CSS, rasmlar): Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
