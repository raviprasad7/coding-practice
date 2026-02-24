import Heap from './00-heap-implementation';

function kClosest(points: number[][], k: number): number[][] {
	const result: number[][] = [];
	const heap = new Heap<number>();

	for (const point of points) {
		heap.push(point);
	}

	return result;
};

{
	const points = [[1,3],[-2,2]];
	console.log(points, 1);
}

{
	const points = [[3,3],[5,-1],[-2,4]];
	console.log(points, 2);
}