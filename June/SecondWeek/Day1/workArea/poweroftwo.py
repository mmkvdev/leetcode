import math


class PowerOfTwo:
    def checkPower(self, k):
        return (math.log10(k)/math.log10(2))

    def poweroftwo(self, n):
        if n <= 0:
            return False
        return (math.ceil(self.checkPower(n)) == math.floor(self.checkPower(n)))
        '''count = 0
        for i in range(n+1):
            if(2 ** i == n):
                count = 1
        if count:
            return True
        else:
            return False'''
        '''if (2**i) == n:
            return True
        else:
            return False'''
        '''if (2**i) == n:
            print(i)
            return True
        else:
            return False'''


if __name__ == '__main__':
    power = PowerOfTwo()
    num = int(input())
    print(power.poweroftwo(num))
