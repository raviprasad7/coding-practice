class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    bfs () {
        let ptr = this as TreeNode | null;
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
}

export default TreeNode;
