class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        duplicateFilter = []
        for i in nums:
            i = abs(i)
            
            if nums[i-1] > 0:
                nums[i-1] *= -1
        for j in range(len(nums)):
            if(nums[j] > 0):
                duplicateFilter.append(j+1)
        return duplicateFilter
        
        