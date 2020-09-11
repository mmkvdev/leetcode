class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        dp1 = [0]*len(nums)
        dp2 = [0]*len(nums)
        dp1[0] = dp2[0] = nums[0]
        
        for i in range(1,len(nums)):
            if nums[i] > 0:
                dp1[i] = max(dp1[i-1]*nums[i], nums[i])
                dp2[i] = min(dp2[i-1]*nums[i], nums[i])
            else:
                dp1[i] = max(dp2[i-1]*nums[i],nums[i])
                dp2[i] = min(dp1[i-1]*nums[i], nums[i])
                
        return max(dp1)