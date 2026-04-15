import TreeNode from '../05-tree/00-tree-implementation';

function maxBinaryTree (arr: number[]) {
	const stack: TreeNode[] = [];

	for (const a of arr) {
		const current = new TreeNode(a);

		while (stack.length && a > stack[stack.length - 1].val) {
			const top = stack.pop()!;
			current.left = top;
		}

		if (stack.length) {
			stack[stack.length - 1].right = current;
		}

		stack.push(current);
	}

	return stack[0];
}

{
	const input = [3,2,1,6,0,5];
	const output = maxBinaryTree(input);	// [6,3,5,null,2,0,null,null,1]
	output.bfs(true);
}