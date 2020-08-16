/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cost1 = Infinity;
    let cost2 = Infinity;

    return prices.reduce(
        ([profit1, profit2], price) => {
            cost1 = Math.min(cost1, price);
            profit1 = Math.max(profit1, price - cost1)
            
            cost2 = Math.min(cost2, price - profit1);
            profit2 = Math.max(profit2, price - cost2)
            
            return [profit1, profit2]
        },
        [0, 0]
    )[1];
};