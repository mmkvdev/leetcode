class Solution:        
    def checkPerfectNumber(self, num: int) -> bool:
        sum = 1
        i = 2
        while i*i <= num:
            if num % i == 0:
                sum = sum + i + num/i
            i += 1
            
        if sum == num and num != 1: return True
        else: return False