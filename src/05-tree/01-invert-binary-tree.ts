import TreeNode from './00-tree-implementation';

function invertTree(root: TreeNode | null): TreeNode | null {
    let ptr = root;

    const recurse = (node: TreeNode | null) => {
        if (node) {
            const temp = node.left;
            node.left = recurse(node.right);
            node.right = recurse(temp);
        }
        return node;
    };

    return recurse(root);
};

{
    // Input: [4,2,7,1,3,6,9]
    const node2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const node7 = new TreeNode(7, new TreeNode(6), new TreeNode(9));

    const root = new TreeNode(4, node2, node7);
    root.bfs();
    const output = invertTree(root);    // [4,7,2,9,6,3,1]
    output?.bfs();
}

{
    // Input: [2, 1, 3]
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    root.bfs();
    const output = invertTree(root);    // [2,3,1]
    output?.bfs();
}

{
    // Input: []
    const root = null as TreeNode | null;
    root?.bfs();
    const output = invertTree(root);    // []
    output?.bfs();
}
