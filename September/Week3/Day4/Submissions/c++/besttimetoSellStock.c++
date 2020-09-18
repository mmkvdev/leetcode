class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minSellPrice = INT_MAX;
        int maxSellPrice = 0;
        
        for(int i=0;i<prices.size();i++) {
            if(prices[i] < minSellPrice) {
                minSellPrice = prices[i];
            }
            
            if(prices[i]-minSellPrice > maxSellPrice) {
                maxSellPrice = prices[i]-minSellPrice;
            }
        }
        
        return maxSellPrice;
    }
};