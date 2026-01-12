import TreeNode from './00-tree-implementation';

function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0;

	const dfs = (node: TreeNode | null, depth: number) => {
		if (node === null) {
			return;
		}

		let newDepth = depth + 1;

		if (newDepth > maxDepth) {
			maxDepth = newDepth;
		}

		if (node.left) {
			dfs(node.left, newDepth);
		}

		if (node.right) {
			dfs(node.right, newDepth);
		}
	};

	dfs(root, 0);

	return maxDepth;
};

{
	const node9 = new TreeNode(9);
	const node20 = new TreeNode(20, new TreeNode(15), new TreeNode(7));

	const root = new TreeNode(3, node9, node20);
	console.log(maxDepth(root));	// 3
}

{
	const root = new TreeNode(1, null, new TreeNode(2));
	console.log(maxDepth(root));	// 2
}
