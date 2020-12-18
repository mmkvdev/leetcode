class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        a = [float("inf")]*2
        for elem in nums:
            if elem < a[0] : a[0] = elem
            if elem < a[1] and elem > a[0]: a[1] = elem
            if elem > a[1] : return True
        return False