class Solution:
    def decodeString(self, s: str) -> str:
        integerstack = [] 
        stringstack = [] 
        temp = "" 
        result = ""  
        i = 0 
        while i < len(s): 
            count = 0
            if (s[i] >= '0' and s[i] <='9'): 
                while (s[i] >= '0' and s[i] <= '9'): 
                    count = count * 10 + ord(s[i]) - ord('0')  
                    i += 1
                i -= 1
                integerstack.append(count) 
            elif (s[i] == ']'): 
                temp = ""  
                count = 0

                if (len(integerstack) != 0): 
                    count = integerstack[-1]  
                    integerstack.pop() 

                while (len(stringstack) != 0 and stringstack[-1] !='[' ): 
                    temp = stringstack[-1] + temp  
                    stringstack.pop() 

                if (len(stringstack) != 0 and stringstack[-1] == '['):  
                    stringstack.pop()  
                for j in range(count): 
                    result = result + temp  

                for j in range(len(result)): 
                    stringstack.append(result[j])  

                result = "" 
            elif (s[i] == '['): 
                if (s[i-1] >= '0' and s[i-1] <= '9'):  
                    stringstack.append(s[i])  

                else: 
                    stringstack.append(s[i])  
                    integerstack.append(1) 

            else: 
                stringstack.append(s[i]) 

            i += 1
        while len(stringstack) != 0: 
            result = stringstack[-1] + result  
            stringstack.pop() 

        return result 