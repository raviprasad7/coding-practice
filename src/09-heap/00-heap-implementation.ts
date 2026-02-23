class Heap<T> {
  	private readonly values:T[] = [];

	push (value: T) {
		this.values.push(value);
		this.bubbleUp();
	}

	bubbleUp () {
		let idx = this.values.length - 1;
		const element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parentElement = this.values[parentIdx];

			if (parentElement <= element) break;

			[this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
			idx = parentIdx;
		}
	}

	pop (): T | null {
		if (this.values.length === 0) {
			return null;
		}
		if (this.values.length === 1) {
			return this.values.pop()!;
		}

		const top = this.values[0];
		this.values[0] = this.values.pop()!;
		this.sinkDown();

		return top;
	}

	sinkDown () {
		let idx = 0;
		const length = this.values.length;

		while ((idx * 2) + 1 < length) {
			let idx2 = (idx * 2) + 1;

			// compare between left and right child to identify the min
			if (idx2 + 1 < length && this.values[idx2 + 1] < this.values[idx2]) {
				idx2++;
			}

			[this.values[idx], this.values[idx2]] = [this.values[idx2], this.values[idx]];
			idx = idx2;
		}
	}

	printHeap () {
		if (this.values.length) {
			let idx = 0;
			let output = '';
			const queue:T[] = [];
			const length = this.values.length;
			
			queue.push(this.values[idx]);

			while (queue.length) {
				const first = queue.shift()!;
				output += ` -> ${first}`;
				if ((idx * 2 + 1) < length) {
					queue.push(this.values[idx * 2 + 1]);
				}
				if ((idx * 2 + 2) < length) {
					queue.push(this.values[idx * 2 + 2]);
				}
				idx++;
			}

			console.log(output.slice(4));
		}
	}
}

export default Heap;
