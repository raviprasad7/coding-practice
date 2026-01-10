function addBinary(a: string, b: string): string {
	let result = '';
	let diff = Math.abs(a.length - b.length);
	let carryForward = 0;

    if (a.length < b.length) {
		a = '0'.repeat(diff) + a;
    } else if (b.length < a.length) {
		b = '0'.repeat(diff) + b;
	}

	for (let i = a.length - 1; i >= 0; i--) {
		const aChar = +(a.charAt(i));
		const bChar = +(b.charAt(i));
		const sum = aChar + bChar + carryForward;
		carryForward = Number(sum > 1);

		if (sum > 1) {
			result = (sum === 2 ? '0' : '1') + result;
		} else if (sum === 1) {
			result = '1' + result;
		} else if (sum === 0) {
			result = '0' + result;
		}
	}

	if (carryForward) {
		result = '1' + result;
	}

	console.log(a, b);

    return result;
};

console.log(addBinary('11', '1'));  	// 100
console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('11', '11'));		// 110
console.log(addBinary('11', '100'));	// 111