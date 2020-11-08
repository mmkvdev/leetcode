class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        compute_sum = lambda x : sum([ceil(n / x) for n in nums])
        
        # search boundaries for the divisor
        left, right = 1, 2
        while compute_sum(right) > threshold:
            left = right
            right <<= 1
        
        # binary search
        while left <= right:
            pivot = (right + left) >> 1
            num = compute_sum(pivot)

            if num > threshold:
                left = pivot + 1
            else:
                right = pivot - 1
        
        # at the end of loop, left > right,
        # compute_sum(right) > threshold
        # compute_sum(left) <= threshold
        # --> return left
        return left