/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minBuyPrice = Infinity,
        maxSellPrice = 0;

    for (let price of prices) {
        if (price < minBuyPrice) minBuyPrice = price;
        else if (price - minBuyPrice > maxSellPrice)
            maxSellPrice = price - minBuyPrice;
    }
    return maxSellPrice;
};
