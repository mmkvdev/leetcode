class Solution:
    '''def checkAdjacent(self, i,nums):
        sum = 0
        while(i < len(nums)):
            sum += nums[i]
            i += 2
        
        print('sum',sum)
        return sum'''
    
    def rob(self, nums: List[int]) -> int:
        # print(nums)
        '''i = 0
        sum = 0
        while(i < len(nums)):
            k = self.checkAdjacent(i,nums)
            # print(sum)
            if k > sum:
                sum = k
                
            i += 1
            
        return sum'''
        
        dp1, dp2 = 0, 0
        for i in nums:
            dp1, dp2 = dp2, max(dp1+i, dp2)
        return dp2