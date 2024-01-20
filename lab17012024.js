function task1() {
	let num = Number.parseInt(prompt("Enter your age"));

	if (num >= 0 && num < 12) {
		alert("Yur are child")
	}
	else if (num >= 12 && num < 18) {
		alert("Yur are teenager")
	}
	else if (num >= 18 && num < 60) {
		alert("Yur are adult")
	}
	else {
		alert("Yur are old")
	}
}

//Запросіть у користувача число від 0 до 9 і виведіть йому
//спеціальний символ, який розташований на цій клавіші
//(1–!, 2–@, 3–# тощо).
function task2() {
	let strNum = prompt("Enter number");

	switch (strNum) {
		case "0": alert(")"); break;
		case "1": alert("!"); break;
		case "2": alert("@"); break;
		case "3": alert("#"); break;
		case "4": alert("$"); break;
		case "5": alert("%"); break;
		case "6": alert("^"); break;
		case "7": alert("&"); break;
		case "8": alert("*"); break;
		case "9": alert("("); break;
	}
}

//Запросіть у користувача тризначне число та перевірте чи
//є в ньому однакові цифри.
function task3() {
	let strNum = prompt("Enter number");

	if (
		strNum[0] == strNum[1] ||
		strNum[0] == strNum[2] ||
		strNum[1] == strNum[2]
	) {
		alert("Yes");
		return;
	}
	alert("No");
}

//Запросіть у користувача рік та перевірте чи є він високосним. Високосний рік або кратний 400, або кратний 4 і при
//цьому не кратний 100.
function task4() {
	let num = Number.parseInt(prompt("Enter number"));

	if (
		num % 400 == 0 ||
		num % 4 == 0 ||
		num % 100 != 0
	) {
		alert("Yes");
		return;
	}
	alert("No");
}

//Запросіть у користувача п’ятирозрядне число і визначте,
//чи є воно паліндромом.
function task5() {
	let strNum = prompt("Enter number");

	if (
		strNum[0] == strNum[3] &&
		strNum[1] == strNum[4]
	) {
		alert("Yes");
		return;
	}
	alert("No");
}

//Напишіть конвертор валют. Користувач вводить кількість
//USD, вибирає в яку валюту хоче перекласти: EUR, UAN
//або AZN, і отримує відповідну суму.
function task6() {
	let usd = Number.parseInt(prompt("Money in USD"));
	let strNum = prompt("Convert to\n1. EUR\n2. UAH\n3. AZN");
	
	const usd_eur = 0.92;
	const usd_uah = 37.87;
	const usd_azn = 1.7;

	switch (strNum) {
		case "1":
			alert(`${usd} USD in EUR: ${usd * usd_eur}`);
			break;
		case "2":
			alert(`${usd} USD in UAH: ${usd * usd_uah}`);
			break;
		case "3":
			alert(`${usd} USD in AZN: ${usd * usd_azn}`);
			break;
	}
}

//Запросіть у користувача суму покупки та виведіть суму до
//сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до
//500 – 5%, від 500 і вище – 7%. 
function task7() {
	let num = Number.parseInt(prompt("Enter price"));

	if (num >= 200 && num < 300) {
		num *= 0.97;
	}
	else if (num >= 300 && num < 500) {
		num *= 0.95;
	}
	else {
		num *= 0.93;
	}

	alert(`Price with discount: ${num}`)
}

//Запросіть у користувача довжину кола та периметр квадрата. Визначте чи може таке коло поміститися у зазначений квадрат. 
function task8() {
	const pi = 3.14159;
	let circumference = Number.parseInt(prompt("Enter circle circumference"));
	let perimeter = Number.parseInt(prompt("Enter square perimeter"));

	if (circumference / pi <= perimeter / 4) {
		alert("That circle will fit in this square");
		return;
	}
	alert("That circle wont fit in this square");
}

//Задайте користувачеві 3 питання, у кожному питанні по 3
//варіанти відповіді. За кожну правильну відповідь нараховується 2 бали. Після запитань виведіть користувачеві
//кількість набраних балів.
function task9() {
	let answer;
	let score = 0;

	answer = prompt("What gun mounted on an american F15A jet fighter?\nA: M61A1\nB: M61A2\nC: M61A3");
	if (answer == "A" || answer == "a") score++;
	answer = prompt("What fox code coresponds to launch of AIM-7 american semi active radar homing air to air missile?\nA: Fox one\nB: Fox two\nC: Fox three");
	if (answer == "A" || answer == "a") score++;
	answer = prompt("Whitch of these planes have variable-sweep wings?\nA: F-105\nB: F-106\nC: F-111");
	if (answer == "C" || answer == "c") score++;

	alert(`Your total score is ${score}`);
}

//Запросіть дату (день, місяць, рік) і виведіть наступну дату.
//Врахуйте можливість переходу на наступний місяць, рік,
//а також високосний рік. 
function task10() {
	let strDate = prompt("Enter date (format \"day.month.year\")").split(".");
	
	let day = Number.parseInt(strDate[0]);
	let month = Number.parseInt(strDate[1]);
	let year = Number.parseInt(strDate[2]);

	let daysInMouth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (
		year % 400 == 0 ||
		year % 4 == 0 ||
		year % 100 != 0
	) {
		daysInMouth[1]++;
	}

	day++;
	if (day > daysInMouth[month - 1]) {
		day = 1
		month++;
	}
	if (month > 12) {
		month = 1
		year++;
	}

	alert(`Next day date: ${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}.${year}`);
}

