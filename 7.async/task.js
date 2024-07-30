class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		this.alarmCollection.some((callTime) => {
			if (callTime.time === this.time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		});

		this.alarmCollection.push(
			{time: time,
			callback: callback,
			canCall: true
			});
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((deleteTime) => deleteTime.time !== time);

	}
	getCurrentFormattedTime() {
		return new Date().toLocaleString('ru', {
				hour: 'numeric',
				minute: 'numeric'
			})
	}

	start() {
		if (this.intervalId) {
			return
		} 

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((call) => {
				if (call.time === this.getCurrentFormattedTime() && call.canCall === true) {
					call.canCall = false;
					call.callback();
				}
			})
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((call) => {
			call.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}