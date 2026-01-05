function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const diff = target - current;

        if (map.get(diff) !== undefined) {
            return [map.get(diff)!, i];
        }

        map.set(current, i);
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));