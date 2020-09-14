class Solution:
    def rob(self, nums: List[int]) -> int:
        dp1, dp2 = 0, 0
        for i in nums:
            dp1, dp2 = dp2, max(dp1+i, dp2)
        return dp2