class MyQueue {
	private s1: number[];
	private s2: number[];
	private front: number | null;

    constructor() {
		this.s1 = [];
		this.s2 = [];
		this.front = null;
    }

    push(x: number): void {
		if (this.empty()) {
			this.front = x;
		}
        while (this.s1.length) {
			this.s2.push(this.s1.pop()!);
		}
		this.s1.push(x);
		while (this.s2.length) {
			this.s1.push(this.s2.pop()!);
		}
    }

    pop(): number | null {
		if (this.empty()) {
			this.front = null;
			return null;
		}
		const res = this.s1.pop()!;
		this.front = this.s1[this.s1.length - 1];

		return res;
    }

    peek(): number | null {
        return this.front;
    }

    empty(): boolean {
        return this.s1.length === 0;
    }
}

{
	// Input
	// ["MyQueue", "push", "push", "peek", "pop", "empty"]
	// [[], [1], [2], [], [], []]
	const myQueue = new MyQueue();
	console.log(myQueue.push(1)); // queue is: [1]
	console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
	console.log(myQueue.peek()); // return 1
	console.log(myQueue.pop()); // return 1, queue is [2]
	console.log(myQueue.peek()); // return 1
	console.log(myQueue.empty()); // return false
	// Output: [null, null, null, 1, 1, false]
}
