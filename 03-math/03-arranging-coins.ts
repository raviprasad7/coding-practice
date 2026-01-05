class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n: number): number {
        let output = 0;
        let i = 1;
        let sum = 0;

        for (i = 1; sum <= n; i++) {
            sum = (i * (i + 1)) / 2;     
        }
        console.log(n, sum, i);

        return sum < n ? i - 3 : i - 2;
    }
}

const sol = new Solution();
console.log(sol.arrangeCoins(4));
console.log(sol.arrangeCoins(9));
console.log(sol.arrangeCoins(15));
