class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        duplicateFilter = []
        for i in nums:
            i = abs(i)
            
            if nums[i-1] > 0:
                nums[i-1] *= -1
            '''else:
                duplicateFilter.append(i+1)'''
                
        # print(duplicateFilter)
        # print(nums)
        for j in range(len(nums)):
            if(nums[j] > 0):
                duplicateFilter.append(j+1)
        # return duplicateFilter
        # for i in range(len())
        '''for j in range(len(duplicateFilter)):
            # print(j)
            duplicateFilter[j] = len(nums)-duplicateFilter[j];'''
        # print(duplicateFilter.revese())
        # duplicateFilter.reverse()
        
        return duplicateFilter
        
        