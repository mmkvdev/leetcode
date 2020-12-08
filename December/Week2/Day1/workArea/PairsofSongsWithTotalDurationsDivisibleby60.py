class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        '''res = 0
        j = 0
        for i in range(len(time)):
            if (time[i] + time[j]) % 60 == 0:
                res += 1
            j += 1
        # print(res)
        return res'''
        ans = 0
        ht = defaultdict(int)
        for x in A:
            for i in range(17): 
                ans += ht[60*i-x]
            ht[x] += 1
        return ans