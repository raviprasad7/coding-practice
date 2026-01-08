function longestPalindrome(s: string): number {
	const charCount = new Map<string, number>();
	let palindromeLength = 0;
	let isSingleCharAdded = false;

	for (const ch of s) {
		if (!charCount.has(ch)) {
			charCount.set(ch, 0);
		}
		charCount.set(ch, charCount.get(ch)! + 1);
	}

	for (const [char, count] of charCount) {
		if (count % 2 === 0) {
			palindromeLength += count;
		} else {
			palindromeLength += (count - 1);

			if (!isSingleCharAdded) {
				palindromeLength++;
				isSingleCharAdded = true;
			}
		}
	}

	return palindromeLength;
}

console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('a')); // 1
console.log(longestPalindrome('ccc'));	// 3
