class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        i, result, N = 0, [], len(nums)
        
        while i < N:
            beg = end = i
            while end < N - 1 and nums[end] + 1 == nums[end + 1]: end += 1
            result.append(str(nums[beg]) + ("->" + str(nums[end])) *(beg != end))     
            i = end + 1
        
        return result