import TreeNode from './00-tree-implementation';

type CoalescedTreeNode = TreeNode | null;

function lowestCommonAncestor(root: CoalescedTreeNode, p: TreeNode, q: TreeNode): CoalescedTreeNode {
	let output: CoalescedTreeNode = null;
    const queue: CoalescedTreeNode[] = [];

    if (p.val > q.val) {
        [p, q] = [q, p];
    }

    const pVal = p.val;
    const qVal = q.val;

    queue.push(root);

    while (queue.length) {
        const top = queue.shift()!;
        const topVal = top.val;

        if (topVal === pVal || topVal === qVal) {
            return top;
        }
        if (pVal < topVal && topVal < qVal) {
            return top;
        }
        if (pVal < topVal && qVal < topVal) {
            queue.push(top.left);
        }
        if (pVal > topVal && qVal > topVal) {
            queue.push(top.right);
        }
    }

    return output;
};

{
    // Input: [6,2,8,0,4,7,9,null,null,3,5]
    const node0 = new TreeNode(0);
    const node3 = new TreeNode(3);
    const node5 = new TreeNode(5);
    const node4 = new TreeNode(4, node3, node5);
    const node2 = new TreeNode(2, node0, node4);
    const node7 = new TreeNode(7);
    const node9 = new TreeNode(9);
    const node8 = new TreeNode(8, node7, node9);

    const root = new TreeNode(6, node2, node8);
    root.bfs();
    const output = lowestCommonAncestor(root, new TreeNode(2), new TreeNode(8));    // 6
    console.log(output?.val);
}

{
    // Input: [6,2,8,0,4,7,9,null,null,3,5]
    const node0 = new TreeNode(0);
    const node3 = new TreeNode(3);
    const node5 = new TreeNode(5);
    const node4 = new TreeNode(4, node3, node5);
    const node2 = new TreeNode(2, node0, node4);
    const node7 = new TreeNode(7);
    const node9 = new TreeNode(9);
    const node8 = new TreeNode(8, node7, node9);

    const root = new TreeNode(6, node2, node8);
    root.bfs();
    const output = lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4));    // 2
    console.log(output?.val);
}

{
    // Input: [2, 1]
    const root = new TreeNode(2, new TreeNode(1));
    root.bfs();
    const output = lowestCommonAncestor(root, new TreeNode(2), new TreeNode(1));    // 2
    console.log(output?.val);
}

{
    // Input: [2, 1, 3]
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    root.bfs();
    const output = lowestCommonAncestor(root, new TreeNode(3), new TreeNode(1));    // 2
    console.log(output?.val);
}
