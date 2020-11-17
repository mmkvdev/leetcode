class Solution:
    def mirrorReflection(self, p: int, q: int) -> int:
        return (q//gcd(p,q)%2 - p//gcd(p,q)%2+1)