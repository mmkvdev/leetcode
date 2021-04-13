class Solution:
    def maximum69Number (self, num: int) -> int:
        
        # stringfying num contents for iterability
        numStr = str(num)
        flag = True
        res = ''
        
        for i in numStr:
            if i == '6' and flag:
                i = 9
                flag = False
                
            res += str(i)
        
        return res
                
            
        