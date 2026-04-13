class GraphNode<T> {
	val: T;
	neighbors: GraphNode<T>[];

	constructor (val: T, neighbors: GraphNode<T>[] = []) {
		this.val = val;
		this.neighbors = neighbors;
	}

	setNeighbors (neighbors: GraphNode<T>[] = []) {
		this.neighbors = neighbors;
	}
}

export default GraphNode;
