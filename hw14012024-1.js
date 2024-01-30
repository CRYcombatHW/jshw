//Підрахуйте суму всіх чисел у заданому користувачем діапазоні. 
function task1() {
	let nfrom = Number.parseInt(prompt("Enter first number"));
	let nto = Number.parseInt(prompt("Enter second number"));

	let sum = 0;
	for (let i = nfrom; i < nto; i++) {
		sum += i;
	}

	alert(`Sum ${sum}`);
}

//Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.
function task2() {
	let num1 = Number.parseInt(prompt("Enter first number"));
	let num2 = Number.parseInt(prompt("Enter second number"));

	let bsd = 1;
	let smallest = num1 < num2 ? num1 : num2;
	for (let i = 2; i < smallest; i++) {
		if (num1 % i == 0 && num2 % i == 0) {
			bsd = i;
		}
	}

	alert(bsd);
}

//Запросіть у користувача число та виведіть усі дільники цього числа.
function task3() {
	let num = Number.parseInt(prompt("Enter number"));

	let dividers = "";
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			dividers += `${i} `;
		}
	}

	alert(`${dividers}`);
}

//Визначте кількість цифр у введеному числі.
function task4() {
	let strNum = prompt("Enter number");
	let length = 0;

	for (let i = 0; i < strNum.length; i++) {
		length++;
	}

	alert(`This number have ${length} digits`)
}
function task4a() {
	alert(`This number have ${prompt("Enter number").length} digits`)
}

//Запросіть у користувача 10 чисел і підрахуйте, скільки він
//ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть
//статистику на екран. Враховуйте те, що достатньо однієї
//змінної (не 10) для введення чисел користувачем.
function task5() {
	let positive = 0;
	let negative = 0;
	let zeors = 0;
	let even = 0;
	let odd = 0;

	let num;
	for (let i = 0; i < 10; i++) {
		num = Number.parseInt(prompt(`Enter number ${i + 1}`));

		even += num % 2 == 0;
		odd += num % 2;

		positive += num > 0;
		negative += num < 0;
		zeors += num == 0;
	}

	alert(`Positive ${positive}
Negative ${negative}
Zeros ${zeors}
Even ${even}
Odd ${odd}`);
}

//Зацикліть калькулятор. Запросіть у користувача 2 числа і
//знак, розв’яжіть приклад, виведіть результат і запитайте,
//чи хоче він розв’язати ще один приклад. І так триватиме
//доти, доки користувач не відмовиться.
function task6() {
	let num1 = 0;
	let num2 = 0;
	let operation = "!";

	while (operation != "0") {
		num1 = Number.parseInt(prompt("Enter first number"));
		num2 = Number.parseInt(prompt("Enter second number"));
		operation = prompt("opeartion? (+, -, *, /)");
		
		switch (operation) {
			case "+":
				alert(`Result: ${num1 + num2}`);
				break;
			case "-":
				alert(`Result: ${num1 - num2}`);
				break;
			case "*":
				alert(`Result: ${num1 * num2}`);
				break;
			case "/":
				alert(`Result: ${num1 / num2}`);
				break;
		}

		operation = prompt("0 - Leave\n1 - Repeat");
	}
}

//Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо
//число 123456 змістити на 2 цифри, то вийде 345612).
function task7() {
	let strNum = prompt("Number to shift");
	let shiftByOriginal = Number.parseInt(prompt("Shift by"));
	let shiftBy = shiftByOriginal % strNum.length;

	// js fr? its cringe i have to do this
	let strArr = [];
	for (let i in strNum) {
		strArr.push(strNum[i]);
	}

	let shiftFactor = shiftBy;
	let shiftFromStart = true;

	if (shiftBy > Math.floor(strArr.length / 2)) {
		shiftFactor = strArr.length - shiftBy
		shiftFromStart = false;
	}

	let buffer;
	let ifirst;
	let isecond;
	for (let i = 0; i < strArr.length - shiftFactor; i++) {
		ifirst = i;
		isecond = i + shiftFactor;

		if (!shiftFromStart) {
			ifirst = strArr.length - ifirst - 1;
			isecond = strArr.length - isecond - 1;
		}

		buffer = strArr[ifirst];
		strArr[ifirst] = strArr[isecond];
		strArr[isecond] = buffer;
	}

	let newStr = `Number shifted by ${shiftByOriginal}: `;
	for (let i = 0; i < strArr.length; i++) {
		// cringe js
		newStr = newStr + "" + strArr[i];
	}

	alert(newStr);
}

function task8() {
	let dayofweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	for (let i = 0;; i++) {
		alert(dayofweek[i % 7]);
		if (prompt("Wish to see next day of week name? (y/n)") != "y") {
			break;
		}
	}
}

//Виведіть таблицю множення для всіх чисел від 2 до 9.
//Кожне число необхідно помножити на числа від 1 до 10.
function task9() {
	let tableStr = "";

	let fnum = 2;
	let snum = 1;
	for (; fnum < 10; fnum++) {
		tableStr += `${fnum}:\n`;
		for (snum = 1; snum < 11; snum++) {
			tableStr += `${fnum} * ${snum} = ${fnum * snum}\n`;
		}
	}

	alert(tableStr);
	//console log because alert cant display all text 
	console.log(tableStr);
}

//Гра «Вгадай число». Запропонуйте користувачеві загадати
//число від 0 до 100 і відгадати його наступним способом: в
//кожній ітерації циклу поділяєте діапазон чисел навпіл,
//записуєте результат в N і запитуєте у користувача «Ваше
//число > N, < N або == N?». Залежно від відповіді користувача, зменшуєте діапазон. Початковий діапазон від 0 до
//100, поділяєте навпіл і отримуєте 50. Якщо користувач
//вказав, що його число > 50, змінюєте діапазон числа від 51
//до 100. І так доти, доки користувач не вибере == N.
function task10() {
	let from = 0;
	let to = 100;
	let answer = "!";

	let current;
	while (answer != "3") {
		current = Math.floor((from + to) / 2);

		answer = prompt(`Number: ${current}\n\n1: My number is higher\n2. My number is lower\n3: Thats my number`);
		if (answer == "1") {
			from = current;
		}
		else if (answer == "2") {
			to = current;
		}
	}
}

