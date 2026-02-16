function updateMatrix(mat: number[][]): number[][] {
	const rowLen = mat.length;
	const colLen = mat[0].length;
    const dp: number[][] = Array.from({ length: rowLen }, () => Array(colLen).fill(Infinity));
    const visited: boolean[][] = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
	const neighbors = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1]
	];
	const isValidCell = (x: number, y: number): boolean => (x >=0 && x < rowLen && y >=0 && y < colLen);

	const queue: number[][] = [];

	for (let i = 0; i < rowLen; i++) {
		for (let j = 0; j < colLen; j++) {
			if (mat[i][j] === 0) {
				dp[i][j] = 0;
				visited[i][j] = true;
				queue.push([i, j]);
			}
		}
	}
	console.log(queue);

	while (queue.length) {
		const [currentX, currentY] = queue.shift()!;

		for (let [neighborX, neighborY] of neighbors) {
			const [newX, newY] = [currentX + neighborX, currentY + neighborY];

			if (!isValidCell(newX, newY)) continue;
			if (visited[newX][newY]) continue;

			dp[newX][newY] = dp[currentX][currentY] + 1;
			visited[newX][newY] = true;

			queue.push([newX, newY]);
		}
	}

	return dp;
};

{
	const input = [[0,0,0],[0,1,0],[0,0,0]];
	console.log(updateMatrix(input));	// [[0,0,0],[0,1,0],[0,0,0]]
}

{
	const input = [[0,0,0],[0,1,0],[1,1,1]];
	console.log(updateMatrix(input));	// [[0,0,0],[0,1,0],[1,2,1]]
}