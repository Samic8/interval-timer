document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	var remainingTime = document.querySelector('#remainingTime');
	var startButton = document.querySelector('#startButton');
	var stopButton = document.querySelector('#stopButton');
	var secondsInput = document.querySelector('#secondsInput');
	var timer = new Timer();

	init();

	function init() {
		remainingTime.innerHTML = 0;
		startButton.addEventListener('click', startTimer);
		stopButton.addEventListener('click', stopTimer);
	}

	function startTimer() {
		if (timer) {
			timer.stop();
		}
		timer.setLength(parseInt(secondsInput.value));
		timer.start(function(remainingSeconds) {
			remainingTime.innerHTML = remainingSeconds;
		});
	}

	function stopTimer() {
		timer.stop();
	}

	function Timer() {
		this.start = start;
		this.stop = stop;
		this.getEndTime = getEndTime;
		this.remainingTime = remainingTime;
		this.setLength = setLength;

		function start(callback) {
			callback(this.remainingTime());
			this.secondIntervalLoop = window.setInterval(function() {
				var remainingTime = this.remainingTime();
				if (remainingTime === 0) { // broken
					clearInterval(this.secondIntervalLoop);
				}
				callback(remainingTime);
			}.bind(this), 1000);
		}

		function stop() {
			if (this.secondIntervalLoop) {
				clearInterval(this.secondIntervalLoop);
			}
		}

		function setLength(seconds) {
			if (typeof seconds != 'number') {
				throw 'Length must be a number';
				return;
			}
			if (!seconds) {
				seconds = 0;
			}
			this.length = seconds;
			this.endTime = this.getEndTime();
		}
		
		function remainingTime() {
			var t = Date.parse(this.endTime) - Date.parse(new Date());
			return Math.floor( (t/1000) );
		}

		function getEndTime() {
			var endTime = new Date();
			endTime.setSeconds(endTime.getSeconds() + this.length);
			return endTime;
		}
	}

});