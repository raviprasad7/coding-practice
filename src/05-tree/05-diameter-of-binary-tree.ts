import TreeNode from './00-tree-implementation';

function diameterOfBinaryTree (root: TreeNode | null): number {
	let maxDiameter = 0;

	const recurse = (node: TreeNode | null): number => {
		if (!node) return 0;

		let leftMaxDepth = 0;
		let rightMaxDepth = 0;

		if (node.left) leftMaxDepth = 1 + recurse(node.left);
		if (node.right) rightMaxDepth = 1 + recurse(node.right);

		let diameter = leftMaxDepth + rightMaxDepth;

		if (diameter > maxDiameter) {
			maxDiameter = diameter;
		}

		return Math.max(leftMaxDepth, rightMaxDepth);
	};
	recurse(root);

	return maxDiameter;
}

{
	const node2 = new TreeNode(2, new TreeNode(4), new TreeNode(5));

	const root = new TreeNode(1, node2, new TreeNode(3));
	console.log(diameterOfBinaryTree(root));	// 3
}

{
	const root = new TreeNode(1, new TreeNode(2));
	console.log(diameterOfBinaryTree(root));	// 1
}

{
	const node6 = new TreeNode(6, new TreeNode(0, null, new TreeNode(-1)), new TreeNode(6, new TreeNode(-4)));
	const nodeMinus7 = new TreeNode(-7, new TreeNode(-6, new TreeNode(5)), new TreeNode(-6, new TreeNode(9, new TreeNode(-2))));
	const nodeMinus9 = new TreeNode(-9, new TreeNode(9, node6), nodeMinus7);
	const nodeMinus3 = new TreeNode(-3, nodeMinus9, new TreeNode(-3, new TreeNode(-4)));

	const root = new TreeNode(4, new TreeNode(-7), nodeMinus3);
	console.log(diameterOfBinaryTree(root));	// 8
}