function climbStairs(n: number): number {
	if (n < 3) return n;

	const memo: number[] = [];

	memo[0] = 1;
	memo[1] = 2;

	for (let i = 2; i < n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}

	return memo[n - 1];
};

console.log(climbStairs(2));  // 2
console.log(climbStairs(3));  // 3
