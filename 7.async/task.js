class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		this.time = time;
		this.callback = callback;
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		this.alarmCollection.find((callTime) => {
			if (callTime === this.time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		});
		let call = {
			time: this.time,
			callback: this.callback,
			canCall: true
		}

		this.alarmCollection.push(call);
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((deleteTime) => deleteTime.time !== time);

	}
	getCurrentFormattedTime() {
		let date = new Date();
		let options = {
			hour: 'numeric',
			minute: 'numeric'
		}

		return date.toLocaleString('ru', options)
	}

	start() {
		if (!this.intervalId) {
			return
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((call) => {
				if (call.time === getCurrentFormattedTime() && call.canCall === true) {
					call.canCall = false;
					this.callback();
				}
			})
		}, 1000)
	}

	stop() {
		function clearInterval() {
			intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach((call) => {
			call.canCall = true;
		})
	}

	clearAlarms() {
		stop();
		this.alarmCollection = [];
	}
}