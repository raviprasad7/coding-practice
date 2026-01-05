function findAllPermutations (nums: number[]): number[][] {
    const output: number[][] = [];

    const helper = (active: number[], previous: number[]) => {
        if (active.length === 0) {
            output.push(previous);
            return;
        }
        for (let i = 0; i < active.length; i++) {
            const element = active.splice(i, 1)[0];
            helper(active, [...previous, element]);
            active.splice(i, 0, element);
        }
    };

    helper(nums, []);

    return output;
}

console.log(findAllPermutations([1, 2, 3]));
console.log(findAllPermutations([1, 3, 5, 7, 9]));
