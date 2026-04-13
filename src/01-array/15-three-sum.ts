function threeSum(nums: number[]): number[][] {
	const result: number[][] = [];
    const sorted = nums.sort((a, b) => a - b);
	console.log(sorted);

	for (let i = 0; i < sorted.length; i++) {
		if (i > 0 && sorted[i] === sorted[i - 1]) {
			continue;
		}

		let j = i + 1;
		let k = sorted.length - 1;

		while (j < k) {
			const total = sorted[i] + sorted[j] + sorted[k];

			if (total < 0) {
				j++;
			} else if (total > 0) {
				k--;
			} else {
				result.push([sorted[i], sorted[j], sorted[k]]);
				j++;

				while (sorted[j] === sorted[j - 1] && j < k) {
					j++;
				}
			}
		}
	}

	return result;
};

{
	const input = [-1,0,1,2,-1,-4];
	console.log(threeSum(input));	// [[-1,-1,2],[-1,0,1]]
}

{
	const input = [0,1,1];
	console.log(threeSum(input));	// []
}

{
	const input = [0,0,0];
	console.log(threeSum(input));	// [[0,0,0]]
}
