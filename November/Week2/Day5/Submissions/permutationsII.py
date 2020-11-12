from itertools import permutations

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        numPerm = permutations(nums)
        res = []
        for i in numPerm:
            if i not in res:
                res.append(i)
        return res