class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        ans = 0
        ht = defaultdict(int)
        for x in A:
            for i in range(17): 
                ans += ht[60*i-x]
            ht[x] += 1
        return ans