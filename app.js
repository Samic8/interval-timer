document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	var remainingTime = document.querySelector('#remainingTime');
	var startButton = document.querySelector('#startButton');
	var secondsInput = document.querySelector('#secondsInput');

	init();

	function init() {
		remainingTime.innerHTML = 0;
		startButton.addEventListener('click', startTimer);
	}

	function startTimer() {
		var timer = new Timer(parseInt(secondsInput.value));

		timer.start(function(remainingSeconds) {
			remainingTime.innerHTML = remainingSeconds;
		});
	}

	function Timer(length) {
		this.length = length;
		this.start = start;
		this.endTime = endTime();
		this.remainingTime = remainingTime;

		function start(callback) {
			callback(this.remainingTime());
			setInterval(function() {
				callback(this.remainingTime());
			}.bind(this), 1000);
		}
		
		function remainingTime() {
			var t = Date.parse(this.endTime) - Date.parse(new Date());
			return Math.floor( (t/1000) % 60 );
		}

		function endTime() {
			var endTime = new Date();
			endTime.setSeconds(endTime.getSeconds() + length);
			return endTime;
		}
	}

});