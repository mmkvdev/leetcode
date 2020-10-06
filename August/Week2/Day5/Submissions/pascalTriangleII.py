class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        res = [1]
        for i in range(1, rowIndex+1):
            res.append(int(res[i-1]*(rowIndex - (i-1))/i))
        return res