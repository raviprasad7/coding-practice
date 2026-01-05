function maxSubArray(nums: number[]): number {
    if (!nums.length) return 0;

    const dp: number[] = [];
    let maxSum = nums[0];

    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);

        if (dp[i] > maxSum) {
            maxSum = dp[i];
        }
    }

    console.log(dp);

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 6
console.log(maxSubArray([5,4,-1,7,8])); // 23