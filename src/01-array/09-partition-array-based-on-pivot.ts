function pivotArray(nums: number[], pivot: number): number[] {
    const rotateRight = (arr: number[], start: number, end: number) => {
        if (start >= end || end > arr.length - 1) {
            return;
        }
        const temp = arr[end];

        for (let i = end; i > start; i--) {
            arr[i] = arr[i - 1];
        }

        arr[start] = temp;
    };

    let lesserNumberEndPtr = 0;
    let pivotEndPtr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            if (i !== lesserNumberEndPtr) {
                rotateRight(nums, lesserNumberEndPtr, i);
            }
            lesserNumberEndPtr++;
            pivotEndPtr++;
        } else if (nums[i] === pivot) {
            if (i !== pivotEndPtr) {
                rotateRight(nums, pivotEndPtr, i);
            }
            pivotEndPtr++;
        }
    }

    return nums;
};

console.log(pivotArray([9,12,5,10,14,3,10], 10)); // [9,5,3,10,10,12,14]
console.log(pivotArray([-3,4,3,2], 2)); // [-3,2,4,3]
