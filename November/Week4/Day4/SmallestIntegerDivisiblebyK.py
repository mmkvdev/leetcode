class Solution:
    def smallestRepunitDivByK(self, K: int) -> int:
        if K % 2 == 0 or K % 5 == 0: return -1
        rem, steps = 1, 1
        while rem % K != 0:
            rem = (rem*10 + 1) % K
            steps += 1
        return steps