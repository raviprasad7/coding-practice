function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue: number[][] = [];
    const rowLen = image?.length;
    const colLen = image[0]?.length;
    const visited: boolean[][] = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
    const isValidNode =
        ([x, y]: number[]): boolean => (x >= 0 && x < rowLen && y >= 0 && y < colLen);
    const possibleNeighborNodes = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    const srcColor = image[sr][sc];

    queue.push([sr, sc]);
    image[sr][sc] = color;
    visited[sr][sc] = true;

    while (queue.length) {
        const [cx, cy]: number[] = queue.shift()!;
        const neighbors = possibleNeighborNodes.map(([nx, ny]) => [nx + cx, ny + cy]).filter(isValidNode);
        console.log(neighbors);
        for (const [nx, ny] of neighbors) {
            if (!visited[nx][ny] && image[nx][ny] === srcColor) {
                image[nx][ny] = color;
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }

    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); // [[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0)); // [[0,0,0],[0,0,0]]
