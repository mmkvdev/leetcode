class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        out, beg, end, P = 0, 0, 0, 1
        while end < len(nums):
            P *= nums[end]
            while end >= beg and P >= k:
                P /= nums[beg]
                beg += 1
            out += end - beg + 1
            end += 1
        return out