function majorityElement(nums: number[]): number {
	let majority: number | null = null;
	let maxCount = 0;
	const freqCount = new Map<number, number>();

	for (const n of nums) {
		if (!freqCount.has(n)) {
			freqCount.set(n, 0);
		}
		const newCount = freqCount.get(n)! + 1;
		freqCount.set(n, newCount);

		if (newCount > maxCount) {
			maxCount = newCount;
			majority = n;
		}
	}

	return majority!;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
