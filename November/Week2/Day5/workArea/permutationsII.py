from itertools import permutations

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        # print(permutations(nums))
        numPerm = permutations(nums)
        
        '''for i in list(numPerm):
            print(i)'''
        res = []
        for i in numPerm:
            if i not in res:
                res.append(i)
        # print(res)
        return res