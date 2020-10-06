var maxProfit = (prices) => {
    let minBuyPrice = Infinity, maxSellPrice = 0;

    for(let price of prices) {
        // console.log(price)
        if (price < minBuyPrice){
            minBuyPrice = price;
           // console.log(minBuyPrice)
        }
        else if(price - minBuyPrice > maxSellPrice ){
            maxSellPrice = price-minBuyPrice;
            // console.log(maxSellPrice)
        }
    }

    return maxSellPrice;
}

console.log(maxProfit([1,2,3,0,2]))
// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))