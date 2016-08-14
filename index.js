navigator.serviceWorker.register('service-worker.js', {
	scope: '.'
}).then(function(registration) {
	console.log('The service worker has been registered', registration);
});

navigator.serviceWorker.addEventListener('controllerchange', function(event) {
	console.log('[controllerchange]', event);
	
	navigator.serviceWorker.controller.addEventListener('statechange',function(){
		console.log('[controllerchange][statechange]', this.state);
		
		if (this.state === 'activated') {
			console.log(this.state, 'ACTIVEATE');
			document.getElementById('offlineNotification').classlist.remove('hidden');
		}
	});
	
});

