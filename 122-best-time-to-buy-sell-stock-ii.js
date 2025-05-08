// Problem: 122. Best Time to Buy and Sell Stock II
// Approach: Greedy — accumulate all increasing pairs.

var maxProfit = function(prices) {
    let totalProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1];
        }
    }
    return totalProfit;
};
