class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        str_nums = []
        for num in nums:
            str_nums.append(str(num)) 
            
        str_nums.sort(reverse=True) 
        
        flag = False 
        while not flag:
            flag = True
            i=0
            while i < len(str_nums)-1:
                if str_nums[i]+str_nums[i+1] < str_nums[i+1]+str_nums[i]: 
                    str_nums[i], str_nums[i+1] = str_nums[i+1], str_nums[i]
                    flag = False
                i += 1
                
        res = "".join(str_nums)
        
        if res[0] == '0':
            return str(0)
        
        return res