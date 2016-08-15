var CACHE_NAME = 'dependencies-cache';

var REQUIRED_FILES = ['quote-1.json', 'quote-2.json', 'app.js', 'index.js'];

self.addEventListener('install', installListener);
self.addEventListener('fetch', fetchListener);
self.addEventListener('activate', activateListener);

function installListener(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache){
			return cache.addAll(REQUIRED_FILES);
		}).then(function (){
			return self.skipWaiting();
		})
	)
}

function fetchListener(event) {
	var request = event.request;
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
}

function activateListener(event) {
	event.waitUntil(self.clients.claim());
}