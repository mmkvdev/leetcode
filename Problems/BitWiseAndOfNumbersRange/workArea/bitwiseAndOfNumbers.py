import math
class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        '''# print(m & n)
        res = []
        for i in range(m,n+1):
            res.append(i)
        # print(res)
        j = res[0]
        for i in range(1,len(res)):
            # print(i)
            j = j & res[i]
            
        # print(j)
        
        return j
        # print(res)
        # return res'''
        '''if m == 0 and int(math.log(m,2)) < int(math.log(n,2)):
            return 0
        res = n
        for i in range(m, n):
            res &= i
        # print(res)
        return res'''
        if m == n:
	        return m
        difference = n - m
        msb = 1 << math.floor(math.log2(difference))
        bits_to_remove = (msb << 1) - 1
        return m & n & ~bits_to_remove