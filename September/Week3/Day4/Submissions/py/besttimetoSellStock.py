import math
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        pos = math.inf
        
        maxSellPrice = 0
        
        for i in prices:
            if i < pos:
                pos = i
            if i-pos > maxSellPrice:
                maxSellPrice = i-pos
                
        return maxSellPrice