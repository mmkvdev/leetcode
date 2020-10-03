class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        numCounter = Counter(nums)
        if k > 0:
            res = sum([i+k in numCounter for i in numCounter])
        else:
            res = sum([numCounter[i] > 1 for i in numCounter])
            
        return res