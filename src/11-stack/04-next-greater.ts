function nextGreater (arr: number[]): number[] {
	const result = Array(arr.length).fill(-1);
	const stack: number[] = [];

	for (let i = 0; i < arr.length; i++) {
		while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
			const idx = stack.pop()!;
			result[idx] = arr[i];
		}
		stack.push(i);
	}

	return result;
}

{
	console.log(nextGreater([2, 1, 2, 4, 3])); // [4, 2, 4, -1, -1]
}