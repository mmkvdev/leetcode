/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var buy = Infinity
    var free = 0, last = 0, now = 0;
    prices.forEach(x => {
        now = Math.max(last, x - buy);
        buy = Math.min(buy, x - free);
        free = last;
        last = now;
    });
    return now;
};