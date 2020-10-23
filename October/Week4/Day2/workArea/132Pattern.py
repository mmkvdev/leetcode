class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        '''for i in range(0,len(nums)):
            j = i+1
            k = j+1
            if j < len(nums) and k < len(nums) and i < j < k and nums[i] < nums[k] < nums[i]:
                print(i,j,k)
                return True
            
        print('after: ', i, j, k)
        return False'''
        min_list = list(accumulate(nums, min))
        stack, n = [], len(nums)
        
        for j in range(n-1, -1, -1):
            if nums[j] > min_list[j]:
                while stack and stack[-1] <= min_list[j]:
                    stack.pop()
                if stack and stack[-1] < nums[j]:
                    return True
                stack.append(nums[j])           
        return False