function productExceptSelf(nums: number[]): number[] {
    const leftRunningProduct: number[] = Array(nums.length).fill(1);
    const rightRunningProduct: number[] = Array(nums.length).fill(1);
    const result: number[] = [];

    for (let i = 1; i < nums.length; i++) {
        leftRunningProduct[i] = nums[i - 1] * leftRunningProduct[i - 1];
    }

    for (let i = nums.length - 2; i >=0 ; i--) {
        rightRunningProduct[i] = nums[i + 1] * rightRunningProduct[i + 1];
    }

    console.log(leftRunningProduct);
    console.log(rightRunningProduct);

    return leftRunningProduct.map((val, idx) => val * rightRunningProduct[idx]);
};

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]

// l = [1, 1, 2, 6]
// r = [24, 12, 4, 1]