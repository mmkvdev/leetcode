class Solution:
    def lastIndexOf(self, s):
        index = 0
        for i in range(len(s)):
            if s[i] == ' ':
                index = i
                
        return index
    
    def lengthOfLastWord(self, s: str) -> int:
        if s == '' or s == ' ':
            return 0
        elif len(s) == 1:
            return 1
        # print(len(s))
        else:
            k = self.lastIndexOf(s)
            # print(k)
            if k == 0:
                print(s[k:len(s)])
                if s[k] == ' ':
                    return len(s[k:len(s)-1])
                else: 
                    return len(s)
            # print(k)
            # print(len(s[k:len(s)]))
            # print(s[k+1:len(s)])
            elif k == len(s) - 1:
                count = 0
                for i in reversed(range(k)):
                    if s[i] == ' ':
                        continue
                    else:
                        count += 1
                        if s[i-1] == ' ':
                            return count
                return count
            else:
                return len(s[k+1:len(s)])
            '''elif k == len(s)-1:
                # print('gotcha')
                count = 0
                for i in reversed(range(k)):
                    # if s[k-1] == ' '
                    if s[i] == ' ':
                        # return count
                        continue
                    else: 
                        # print(s[i])
                        count += 1
                        if s[i-1] == ' ':
                            return count
                return count
            else: 
                return len(s[k+1:len(s)])'''