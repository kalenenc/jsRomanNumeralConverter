function convert() {
	var roman = "";
	var number = document.querySelector(".input").value;
	while (number >= 1000) {
		number -= 1000;
		roman += 1000;
	}

	if (number >= 900) {
		number -= 900;
		roman += "CM"
	}

	while(number >= 500) {
		number -= 500;
		roman += "D";
	}

	if (number >= 400) {
		number -= 400;
		roman += "CD"
	}

	while(number >= 100) {
		number -=100;
		roman += "C";
	}

	if (number >= 90) {
		number -= 90;
		roman += "XC";
	}

	while (number >= 50) {
		number -= 50;
		roman += "L";
	}

	if (number >= 40) {
		number -= 40;
		roman += "XL";
	}

	while (number >= 10) {
		number -= 10;
		roman += "X";
	}

	if (number == 9) {
		number -= 9;
		roman += "IX";
	}

	while (number >= 5) {
		number -= 5;
		roman += "V";
	}

	if (number == 4) {
		number -= 4;
		roman += "IV";
	}

	while (number >= 1) {
		number -= 1;
		roman += "I";
	}

	if (isNaN(number) === true) {
		document.querySelector(".converted").innerHTML = "Please enter only numbers to be converted";
	}

	document.querySelector(".converted").innerHTML = roman;
	// alert("Your answer is " + roman);
}




