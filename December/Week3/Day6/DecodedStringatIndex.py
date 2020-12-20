class Solution:
    def decodeAtIndex(self, S: str, K: int) -> str:
        a, b, res = {}, [], 0
        for i in S:
            if i.isdigit():
                b.append(res)
                res *= int(i)
            else:
                a[res] = i
                res += 1
        K -= 1
        while K not in a:
            K %= b.pop()
        return a[K]