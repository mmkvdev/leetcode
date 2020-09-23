class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        diffs = [a-b for a,b in zip(gas, cost)]
        n = len(diffs)
        cumsum, out = 0, 0
        for i in range(2*n):
            cumsum += diffs[i%n]
            if cumsum < 0:
                cumsum = 0
                out = i + 1
                
        return -1 if out > n else out