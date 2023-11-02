import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST || []);

const matchFunction = ({ url }) => url.href === 'https://buggy-service-backend.onrender.com/';

registerRoute(
  matchFunction,
  new StaleWhileRevalidate({
    cacheName: 'news-cache',
  }),
);
