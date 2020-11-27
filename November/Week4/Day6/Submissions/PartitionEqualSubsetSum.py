class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        setSum = sum(nums)/2
        subSet = set([nums[0]])
        for i in nums[1:]:
            for j in list(subSet):
                subSet.add(i+j)
        return setSum in subSet