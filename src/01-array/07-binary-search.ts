function binarySearch (nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([2, 4, 5, 6, 7, 9, 12], 12)); // 6
console.log(binarySearch([-12, -3, 0, 5, 8, 10, 14], 0)); // 2
console.log(binarySearch([-20, -19, -15, -10], 20)); // -1
