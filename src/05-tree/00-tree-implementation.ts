class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    static DFS_MODES: { [key: string]: string } = {
        PREORDER: 'PREORDER',
        INORDER: 'INORDER',
        POSTORDER: 'POSTORDER',
    }

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    bfs () {
        let ptr = this as TreeNode;
        const queue: (TreeNode|null)[] = [];
        let log = '';

        queue.push(ptr);

        while (queue.length) {
            const node = queue.shift();

            if (node) {
                log += ` -> ${node?.val}`;
                queue.push(node.left, node.right);
            }
        }

        console.log(log);
    }

    dfs (mode = TreeNode.DFS_MODES.INORDER) {
        const recurse = (node: TreeNode | null) => {
            if (!node) return;

            switch (mode) {
                case TreeNode.DFS_MODES.PREORDER:
                    console.log(node.val);
                    recurse(node.left);
                    recurse(node.right);
                    break;
                case TreeNode.DFS_MODES.INORDER:
                    recurse(node.left);
                    console.log(node.val);
                    recurse(node.right);
                    break;
                case TreeNode.DFS_MODES.POSTORDER:
                    recurse(node.left);
                    recurse(node.right);
                    console.log(node.val);
                    break;
            }
        };

        recurse(this);
    }
}

export default TreeNode;
