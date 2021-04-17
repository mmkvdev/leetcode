class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        res = 0
        j = len(num)-1
        for i in range(len(num)):
            res += num[i] * 10**j
            j -= 1
        # print(res)
        # res = res + k
        return list(map(int, str(res+k)))