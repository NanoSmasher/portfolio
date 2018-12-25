---
---
// https://developers.google.com/web/fundamentals/primers/service-workers/
// https://bitsofco.de/setting-up-a-basic-service-worker/
var cacheName = 'v2';
var cacheFiles = [
	'{{ site.baseurl }}/',
	'{{ site.baseurl }}/index.html',
	'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css',
	'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
	'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
	'{{site.baseurl}}/css/main.css',
	'{{site.baseurl}}/css/modal-min.css',
	'https://code.jquery.com/jquery-3.3.1.slim.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
	'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
	'{{site.baseurl}}/js/main-min.js'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil delays event until Promise is resolved
    e.waitUntil(
	    caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching listed files');
			return cache.addAll(cacheFiles);
	    })
	);
});

self.addEventListener('activate', function(e) {
	console.log("[ServiceWorker] Activated");
	
	e.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				if (thisCacheName !== cacheName) {
					console.log("[ServiceWorker] Removing old cache",thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	);
	
});

self.addEventListener('fetch', function(e) {
	//console.log("[ServiceWorker] Fetching", e.request.url);
	
	e.respondWith(
	
		caches.match(e.request).then(function(response) {
			if ( response ) {
				//console.log("[ServiceWorker] Found in cache");
				return response;
			}

			return fetch(e.request);
			
		})
	);

});