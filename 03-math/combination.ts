function findAllCombinations (nums: number[]): number[][] {
    const output: number[][] = [];

    const recurse = (current: number[], rest: number[]) => {
        output.push([...current]);
        if (rest.length === 0) {
            return;
        }
        
        for (let i = 0; i < rest.length; i++) {
            recurse(current.concat(rest[i]), rest.slice(i + 1));
        }
    };

    recurse([], nums);

    return output;
}

console.log(findAllCombinations([1, 2, 3]));
console.log(findAllCombinations([1, 3, 5, 7, 9]));
