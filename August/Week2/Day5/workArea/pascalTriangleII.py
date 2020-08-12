class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        # res = [0]*(rowIndex+1)
        # print(res)
        # res[0]=1
        res = [1]
        for i in range(1, rowIndex+1):
            # print(i)
            # int(triangle[i - 1] * (rowIndex - (i - 1)) / i)
            res.append(int(res[i-1]*(rowIndex - (i-1))/i))
            # res[i] = int(res[i-1] * (rowIndex - (i-1)/i));
            # res[i] = int(res[i])
            # print(int((rowIndex - (i-1))/i))
        # print(res)
        return res
        # return res