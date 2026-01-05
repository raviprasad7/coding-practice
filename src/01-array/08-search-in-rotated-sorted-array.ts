function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(left, right, mid, nums[left], nums[right], nums[mid]);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        if (nums[mid] <= nums[right]) {
            if (target >= nums[mid + 1] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([3, 5, 1], 3)); // 0
console.log(search([5, 1, 3], 5)); // -1
