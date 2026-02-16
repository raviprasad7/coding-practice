function numIslands(grid: string[][]): number {
	const rowLen = grid.length;
	const colLen = grid[0].length;
	const visited: boolean[][] = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
	const neighbors: number[][] = [
		[-1, 0],
		[0, -1],
		[0, 1],
		[1, 0],
	];
	const isNodeValid = (x: number, y: number): boolean => (x >= 0 && x < rowLen && y >= 0 && y < colLen);
	let islands = 0;
	
	for (let i = 0; i < rowLen; i++) {
		for (let j = 0; j < colLen; j++) {
			if (visited[i][j]) continue;

			const isLand = Number(grid[i][j]) === 1;

			const queue: number[][] = [];
			if (isLand) {
				queue.push([i, j]);
			}
			
			while (queue.length) {
				const [currentX, currentY] = queue.shift()!;

				if (visited[currentX][currentY]) continue;

				visited[currentX][currentY] = true;

				for (let [neighborX, neighborY] of neighbors) {
					const [newX, newY] = [currentX + neighborX, currentY + neighborY];

					if (!isNodeValid(newX, newY) || visited[newX][newY]) {
						continue;
					}
					if (Number(grid[newX][newY]) === 1) {
						queue.push([newX, newY]);
					}
				}
			}
			if (isLand) {
				islands++;
			}
		}
	}

	return islands;
};

{
	const input = [
		["1","1","1","1","0"],
		["1","1","0","1","0"],
		["1","1","0","0","0"],
		["0","0","0","0","0"]
	];
	console.log(numIslands(input));
}

{
	const input = [
		["1","1","0","0","0"],
		["1","1","0","0","0"],
		["0","0","1","0","0"],
		["0","0","0","1","1"]
	];
	console.log(numIslands(input));
}