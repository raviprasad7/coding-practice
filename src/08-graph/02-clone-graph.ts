import GraphNode from './00-graph-implementation';

type _Node = GraphNode<number>;

type CoalescedNode = _Node | null;

function cloneGraph(root: CoalescedNode): CoalescedNode {
	if (!root) return root;

	const queue: CoalescedNode[] = [];
	const visited = new Set<number>();

	let clonedRoot = null;
	const cloneMap = new Map<number, _Node>();

	queue.push(root);

	while (queue.length) {
		const dequeue = queue.shift();
		const nodeVal = dequeue!.val;
		const nodeNeighborVals = [];

		if (!clonedRoot) {
			clonedRoot = new GraphNode(nodeVal);
			cloneMap.set(nodeVal, clonedRoot);
		}

		for (const neighbor of dequeue!.neighbors) {
			if (!visited.has(neighbor.val)) {
				queue.push(neighbor);
			}
		}
	}

	return root;
};

function buildAdjacencyMatrix (node: CoalescedNode): number[][] {
	if (!node) return [];

	const adjacencyMatrix = new Map<number, number[]>();
	const queue: _Node[] = [];
	const visited = new Set<number>();

	queue.push(node);

	while (queue.length) {
		const dequeue = queue.shift();
		const nodeVal = dequeue!.val;
		const nodeNeighborVals = [];

		visited.add(nodeVal);

		for (const neighbor of dequeue!.neighbors) {
			if (!visited.has(neighbor.val)) {
				queue.push(neighbor);
			}
			nodeNeighborVals.push(neighbor.val);
		}

		adjacencyMatrix.set(nodeVal - 1, nodeNeighborVals);
	}

	return Array.from(adjacencyMatrix.values());
}

function validateClone (original: CoalescedNode, clone: CoalescedNode) {
	const originalMatrix = buildAdjacencyMatrix(original);
	const cloneMatrix = buildAdjacencyMatrix(clone);
	console.log(originalMatrix);
	console.log(cloneMatrix);
}

{
	const node1 = new GraphNode(1);
	const node2 = new GraphNode(2);
	const node3 = new GraphNode(3);
	const node4 = new GraphNode(4);
	
	node1.setNeighbors([node2, node4]);
	node2.setNeighbors([node1, node3]);
	node3.setNeighbors([node2, node4]);
	node4.setNeighbors([node1, node3]);
	// input - [[2,4],[1,3],[2,4],[1,3]]

	const clone = cloneGraph(node1);
	// output - [[2,4],[1,3],[2,4],[1,3]]
	validateClone(node1, clone);
}