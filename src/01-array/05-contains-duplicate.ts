function containsDuplicate(nums: number[]): boolean {
    const memo = new Set();

    for (const n of nums) {
        if (memo.has(n)) {
            return true;
        }
        memo.add(n);
    }

    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));