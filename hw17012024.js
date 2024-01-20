let car = {
	manufacturer: "General Dynamics",
	model: "LAV-AD",
	year: "1987",
	averageSpeed: 50
}

function alertCar(car) {
	alert(`manufacturer: ${car.manufacturer}\nmodel: ${car.model}\nyear: ${car.year}\naverage speed: ${car.averageSpeed}`);
}

function calculateTimeForDistance(car, distance) {
	let time = distance / car.averageSpeed;
	time += time / 4;
	time -= time % 4 == 0;

	return time;
}

alertCar(car);
calculateTimeForDistance(car, 700);

let fraction1 = {
	numerator: 1,
	denumerator: 3
}
let fraction2 = {
	numerator: 1,
	denumerator: 2
}

function addFractions(f1, f2) {
	let newFraction = {
		numerator: f1.numerator * f2.denumerator + f2.numerator * f1.denumerator,
		denumerator: f1.denumerator * f2.denumerator
	}

	return newFraction;
}

function substractFractions(f1, f2) {
	let newFraction = {
		numerator: f1.numerator * f2.denumerator - f2.numerator * f1.denumerator,
		denumerator: f1.denumerator * f2.denumerator
	}

	return newFraction;
}

function multiplyFractions(f1, f2) {
	let newFraction = {
		numerator: f1.numerator * f2.numerator,
		denumerator: f1.denumerator * f2.denumerator
	}

	return newFraction;
}

function divideFractions(f1, f2) {
	let newFraction = {
		numerator: f1.numerator * f2.denumerator,
		denumerator: f1.denumerator * f2.numerator
	}

	return newFraction;
}

let newFraction;

alert(`1: ${fraction1.numerator}/${fraction1.denumerator}\n2: ${fraction2.numerator}/${fraction2.denumerator}`);
newFraction = addFractions(fraction1, fraction2);
alert(`${fraction1.numerator}/${fraction1.denumerator} + ${fraction2.numerator}/${fraction2.denumerator} = ${newFraction.numerator}/${newFraction.denumerator}`);
newFraction = substractFractions(fraction1, fraction2);
alert(`${fraction1.numerator}/${fraction1.denumerator} - ${fraction2.numerator}/${fraction2.denumerator} = ${newFraction.numerator}/${newFraction.denumerator}`);
newFraction = multiplyFractions(fraction1, fraction2);
alert(`${fraction1.numerator}/${fraction1.denumerator} * ${fraction2.numerator}/${fraction2.denumerator} = ${newFraction.numerator}/${newFraction.denumerator}`);
newFraction = divideFractions(fraction1, fraction2);
alert(`${fraction1.numerator}/${fraction1.denumerator} / ${fraction2.numerator}/${fraction2.denumerator} = ${newFraction.numerator}/${newFraction.denumerator}`);


let time = {
	seconds: 13,
	minutes: 36,
	hours: 8
}

function alertTime(time) {
	alert(`${time.hours < 10 ? "0" : ""}${time.hours}:${time.minutes < 10 ? "0" : ""}${time.minutes}:${time.seconds < 10 ? "0" : ""}${time.seconds}`);
}

function addSeconds(time, seconds) {
	time.seconds += seconds;
	if (time.seconds > 59) {
		time.minutes += Math.floor(time.seconds / 60);
		time.seconds = time.seconds % 60;
	}
	if (time.minutes > 59) {
		time.hours += Math.floor(time.minutes / 60);
		time.minutes = time.minutes % 60;
	}
}

function addMinutes(time, minutes) {
	time.minutes += minutes;
	if (time.minutes > 59) {
		time.hours += Math.floor(time.minutes / 60);
		time.minutes = time.minutes % 60;
	}
}

function addHours(time, hours) {
	time.hours += hours;
}

alertTime(time);

addSeconds(time, 50);
alertTime(time);
addMinutes(time, 30);
alertTime(time);
addHours(time, 2);
alertTime(time);

