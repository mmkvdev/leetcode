class Solution:
    def calculate(self, s: str) -> int:
        res=[]
        sign='+'
        n=0
        for i in range(len(s)):
            if 48 <= ord(s[i]) <= 57:
                n=(n*10)+int(s[i])
            if s[i] in ['+','-','*','/'] or i+1==len(s):
                if sign=='+':
                    res.append(n)
                elif sign=='-':
                    res.append(-n)
                elif sign=='*':
                    res[-1]*=n
                elif sign=='/':
                    res[-1]=int(res[-1]/n)
                n=0
                sign=s[i]
        return sum(res)
        
