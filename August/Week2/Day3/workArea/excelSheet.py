'''
let res = 0, exp=0;
    for(let i = s.length-1; i >=0; i--) {
        res += (26**exp)*(s[i].charCodeAt()%64);
        exp++;
        
       // console.log(res);
    }
    
    return res;
'''


class Solution:
    def titleToNumber(self, s: str) -> int:
        # print(s)
        '''res = 0
        exp = 0

        for i in range(4,-1-1):
            print(i)

        return 4'''

        return sum([(ord(value)-64)*(26**i) for i, value in enumerate(s[::-1])])
