self.addEventListener('install', () => {
  console.log('service worker installed');
});

self.addEventListener('activate', () => {
  console.log('service worker activated');
});

const cacheName = 'v1'
const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};

self.addEventListener('fetch', (e) => {
  e.respondWith(
    cacheClone(e)
      .then((res) => res)
      .catch(() => caches.match(e.request))
  );
});

self.addEventListener('push',(event) => {
  const data = event.data.json();
  const title = data.title;
  if (Notification.permission === 'granted') {
    event.waitUntil(
      self.registration.showNotification(title, data)
    );
  }
});

self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  
  // Retrieve the URL from the notification data
  const promiseChain = clients.openWindow(clickedNotification.data.url);
  event.waitUntil(promiseChain);
});




 