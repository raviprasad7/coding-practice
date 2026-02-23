function tsp(cost: number[][]): number {
	const len = cost.length;
	const dp = Array.from({ length: 1 << len }, () => Array(len).fill(-1));
	const VISITED_ALL = (1 << len) - 1;

	const solve = (mask: number, pos: number): number => {
		if (mask === VISITED_ALL) {
			return cost[pos][0];
		}

		if (dp[mask][pos] !== -1) {
			return dp[mask][pos];
		}

		let ans = Infinity;

		for (let city = 0; city < len; city++) {
			if ((mask & (1 << city)) === 0) {
				const newMask = mask | (1 << city);
				const newAns = cost[pos][city] + solve(newMask, city);
				ans = Math.min(ans, newAns);
			}
		}

		dp[mask][pos] = ans;
		return ans;
	};

	return solve(1, 0);
}

const cost = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

console.log(tsp(cost)); // Output: 80
