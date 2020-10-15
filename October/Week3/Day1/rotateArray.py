class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def inverse(i, j):
            while i < j:
                nums[i], nums[j] = nums[j], nums[i]
                i, j = i + 1, j - 1
        
        n = len(nums)
        k = k % n
        inverse(0, n-1)
        inverse(0, k-1)
        inverse(k, n-1)
        return nums