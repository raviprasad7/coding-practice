function maxProfit(prices: number[]): number {
    let lowest = Infinity;
    let highest = -Infinity;
    let maxProfit = -Infinity;

    for (const price of prices) {
        if (price < lowest) {
            lowest = price;
            highest = -Infinity;
        }
        if (price > highest) {
            highest = price;
        }
        if ((highest - lowest) > maxProfit) {
            maxProfit = highest - lowest;
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));  // 5
console.log(maxProfit([7,6,4,3,1]));    // 0
console.log(maxProfit([2,4,1]));        // 2