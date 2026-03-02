function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
	let maxArea = 0;
	let i = 0;

	while (i < heights.length) {
		if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
			stack.push(i);
			i++;
		} else {
			const top = stack.pop()!;
			const right = i;
			const left = stack.length ? stack[stack.length - 1] : -1;
			const width = (right - left - 1);
			const area = heights[top] * width;
			maxArea = Math.max(area, maxArea);
		}
	}

	while (stack.length) {
		const top = stack.pop()!;
		const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
		const area = heights[top] * width;
		maxArea = Math.max(area, maxArea);
	}

	return maxArea;
};

{
	const input = [2,1,5,6,2,3];
	console.log(largestRectangleArea(input));	// 10
}

{
	const input = [2,4];
	console.log(largestRectangleArea(input));	// 4
}

{
	const input = [2,8,5,6,2,3];
	console.log(largestRectangleArea(input));	// 15
}
