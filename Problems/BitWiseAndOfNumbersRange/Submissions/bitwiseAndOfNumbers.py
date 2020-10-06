import math
class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        if m == n:
	        return m
        difference = n - m
        msb = 1 << math.floor(math.log2(difference))
        bits_to_remove = (msb << 1) - 1
        return m & n & ~bits_to_remove