class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        res = [[0]*n for _ in range(n)]
        # print(res)
        x,dx,y,dy = 0,1,0,0
        
        for i in range(n*n):
            res[y][x] = i+1
            if not 0 <= x+dx < n or not 0 <= y+dy < n or res[y+dy][x+dx] != 0:
                dx, dy = -dy, dx
            x,y = x+dx, y+dy
            
        # print(res)
        return res
            