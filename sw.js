const CACHE_NAME = 'osce-timer-cache-v1';
const urlsToCache = [
  '.',
  'new-timer.html',
  'style.css',
  'script.js',
  '1detik.mp3',
  '1detik-highpitched.mp3',
  '2menit.mp3',
  'ujian-mulai.mp3',
  'waktu-habis.mp3',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});