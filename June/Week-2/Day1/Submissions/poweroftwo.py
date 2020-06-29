import math
class Solution:
    def checkPower(self, k):
        return (math.log10(k)/math.log10(2))
    
    def isPowerOfTwo(self, n):
        if (n <= 0):
            return False
        return (math.ceil(self.checkPower(n)) == math.floor(self.checkPower(n)))

if __name__ == '__main__':
    powertwo=Solution()
    n = int(input())
    print(powertwo.isPowerOfTwo(n))