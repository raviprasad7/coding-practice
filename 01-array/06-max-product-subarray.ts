type dpEntity = {
    currentMax: number;
    currentMin: number;
}

function maxProduct(nums: number[]): number {
    if (!nums.length) return 0;

    let maxProd = -Infinity;
    const dp: dpEntity[] = [
        {
            currentMax: nums[0],
            currentMin: nums[0],
        }
    ];

    for (let i = 1; i < nums.length; i++) {
        const { currentMax: previousMax, currentMin: previousMin } = dp[i - 1];
        const currentValue = {
            currentMax: Math.max(nums[i], nums[i] * previousMax, nums[i] * previousMin),
            currentMin: Math.min(nums[i], nums[i] * previousMax, nums[i] * previousMin)
        };

        dp.push(currentValue);
    }

    console.log(dp);

    for (const { currentMax, currentMin } of dp) {
        maxProd = Math.max(maxProd, currentMax, currentMin);
    }
    
    return maxProd;
};

console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0
console.log(maxProduct([-2,3,-4])); // 24
