class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        # print(nums)
        '''for(i=0;i<len(nums);i++) {
            print(nums[i]);
        }'''
        
        # print(len(nums))
        '''for i in range(len(nums)):
            print(nums[i])'''
        
        # print(sorted(nums));
        # nums.map()
        '''duplicateFilter = []
        # print(duplicateFilter)
        # print(nums.count(nums[2]))'''
        '''for i in range(len(nums)):
            if(nums.count(nums[i]) === 2) duplicateFilter.append(nums[i])
            
        print(duplicateFilter)'''
        
        '''for i in range(len(nums)):
            # k = nums[i]
            if(nums.count(nums[i]) == 2): 
                duplicateFilter.append(nums[i])
            
        return list(set(duplicateFilter))'''
        
        '''k = sorted(nums)
        for i in range(len(k)):
            print(i,j)'''
        
        '''for i in nums:
            print(abs(i))'''
        # print(nums)
        
        duplicateFilter = []
        for i in nums:
            i = abs(i)
            
            if nums[i-1] > 0:
                nums[i-1] *= -1
            else:
                duplicateFilter.append(i)
                
        return duplicateFilter