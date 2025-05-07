// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open("couturier-cache-v1").then((cache) => {
//       return cache.addAll([
//         "/",
//         "/index.html",
//         "/style.css",
//         "/app.js",
//         "/manifest.json",
//         "/images/chemise.jpg",
//         "/images/robe.jpg",
//       ]);
//     })
//   );
// });
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('couturier-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/app.js',
          '/images/chemise.jpg',
          '/images/robe.jpg',
          '/manifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  