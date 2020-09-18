class Solution {
    public int maxProfit(int[] prices) {
        Integer minSellPrice = Integer.MAX_VALUE;
        int maxSellPrice = 0;
        
        for(int i=0;i<prices.length;i++) {
            if(prices[i] < minSellPrice) {
                minSellPrice = prices[i];
            }
            
            if(prices[i]-minSellPrice > maxSellPrice) {
                maxSellPrice = prices[i]-minSellPrice;
            }
        }
        
        return maxSellPrice;
    }
}