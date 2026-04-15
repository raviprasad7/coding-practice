import TreeNode from './00-tree-implementation';

type CoalescedTreeNode = TreeNode | null;
type NodeMeta = {
	node: CoalescedTreeNode;
	depth: number;
}

function rightSideView(root: CoalescedTreeNode): number[] {
    const result: number[] = [];
	const queue: NodeMeta[] = [];

	if (root) {
		queue.push({
			node: root,
			depth: 0
		});

		while (queue.length) {
			const current = queue.shift()!;

			if (current.node) {
				console.log(`${current.node?.val} at depth ${current.depth}`);
				result[current.depth] = current.node?.val;
				queue.push(
					{
						node: current.node?.left ?? null,
						depth: current.depth + 1,
					},
					{
						node: current.node?.right ?? null,
						depth: current.depth + 1,
					}
				);
			}
		}
	}

	return result;
};

{
	// [1,2,3,null,5,null,4];
	const node2 = new TreeNode(2, null, new TreeNode(5));
	const node3 = new TreeNode(3, null, new TreeNode(4));
	const root = new TreeNode(1, node2, node3);
	console.log(rightSideView(root));	// [1,3,4]
}

{
	// [1,2,3,4,null,null,null,5]
	const node4 = new TreeNode(4, new TreeNode(5));
	const node2 = new TreeNode(2, node4);
	const root = new TreeNode(1, node2, new TreeNode(3));
	console.log(rightSideView(root));	// [1,3,4,5]
}

{
	// [1,null,3]
	const root = new TreeNode(1, null, new TreeNode(3));
	console.log(rightSideView(root));	//	[1,3]
}
