class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1]+[n for n in nums if n!=0]+[1]
        regional_max_coins = [[0 for i in range(len(nums))] for j in range(len(nums))]
        for balloons_to_burst in range(1, len(nums)-1): # number of balloons in (l,r) region
            for l in range(0, len(nums)-balloons_to_burst-1): # for m and r to be assigned legally
                r = l+balloons_to_burst+1
                for m in range(l+1,r):
                    regional_max_coins[l][r] = max(regional_max_coins[l][r], regional_max_coins[l][m]+regional_max_coins[m][r]+nums[l]*nums[m]*nums[r])
        return regional_max_coins[0][-1]