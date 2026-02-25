import TreeNode from './00-tree-implementation';

function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];

	const output = [];
	const queue = [];

	queue.push(root);

	while (queue.length) {
		const currentLevelNodes = [];
		const queueLength = queue.length;

		for (let i = 0; i < queueLength; i++) {
			const currentNode = queue.shift()! as TreeNode;
			currentLevelNodes.push(currentNode);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		output.push(currentLevelNodes.map(node => node.val));
	}

	return output;
};

{
	const node20 = new TreeNode(20, new TreeNode(15), new TreeNode(7));
	const root = new TreeNode(3, new TreeNode(9), node20);
	console.log(levelOrder(root));		//	[[3], [9, 20], [15, 7]]
}

{
	console.log(levelOrder(new TreeNode(1)));		//	[[1]]
}

{
	console.log(levelOrder(null));		//	[]
}
