import TreeNode from './00-tree-implementation';

function isBalanced(root: TreeNode | null): boolean {
    let balanced = true;

    const dfs = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        
        const leftSubtreeDepth = 1 + dfs(node.left);
        const rightSubtreeDepth = 1 + dfs(node.right);
        if (Math.abs(rightSubtreeDepth - leftSubtreeDepth) > 1) {
            balanced = false;
        }

        return Math.max(leftSubtreeDepth, rightSubtreeDepth);
    };

    console.log(dfs(root));

    return balanced;
};

{
    // Input: root = [3,9,20,null,null,15,7]
    const node20 = new TreeNode(20, new TreeNode(15), new TreeNode(7));
    
    const root = new TreeNode(3, new TreeNode(9), node20);
    console.log(isBalanced(root));
}

{
    // Input: root = [1,2,2,3,3,null,null,4,4]
    const node3 = new TreeNode(3, new TreeNode(4), new TreeNode(4));
    const node2 = new TreeNode(2, node3, new TreeNode(3));

    const root = new TreeNode(1, node2, new TreeNode(2));
    console.log(isBalanced(root));
}

{
    // Input: root = []
    console.log(isBalanced(null));
}