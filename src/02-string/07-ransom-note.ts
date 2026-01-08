function canConstruct(ransomNote: string, magazine: string): boolean {
	const targetCharCount = new Map<string, number>();

	for (const ch of magazine) {
		if (!targetCharCount.has(ch)) {
			targetCharCount.set(ch, 0);
		}
		targetCharCount.set(ch, targetCharCount.get(ch)! + 1);
	}

	for (const ch of ransomNote) {
		if (!targetCharCount.has(ch) || targetCharCount.get(ch)! === 0) {
			return false;
		}
		targetCharCount.set(ch, targetCharCount.get(ch)! - 1);
	}

	return true;
}

console.log(canConstruct('a', 'b'));	// false
console.log(canConstruct('aa', 'ab'));	// false
console.log(canConstruct('aa', 'aab'));	// true

