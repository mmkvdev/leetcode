class Solution:
    def rob(self, nums: List[int]) -> int:
        # print(nums)
        '''j = 2
        res = 0
        final = []
        for i in range(0,len(nums)):
            if i == 0 and j == len(nums)-1:
                if final.includes(res):
                    return final.push(res)
            res += nums[i] + nums[i+j]'''
        def robber(nums):
            dp1, dp2 = 0, 0
            for i in nums:
                dp1, dp2 = dp2, max(dp1+i, dp2)
            return dp2
        
        return max(nums[0] + robber(nums[2:-1]), robber(nums[1:]))