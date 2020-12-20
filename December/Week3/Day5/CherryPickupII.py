class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        if grid == [[]]:
            return 0
        
        m = len(grid)
        n = len(grid[0])
        @lru_cache(None)
        def dfs(row, c1, c2):
            if c1 < 0 or c1 >= n or c2 < 0 or c2 >= n:
                return - float("inf")

            res = 0
            res += grid[row][c1] + grid[row][c2]
            
            if c1 == c2:
                res -= grid[row][c1]
                
            if row < m - 1:
                res += max(dfs(row + 1, i, j)
                          for i in [c1 - 1, c1, c1 + 1]
                          for j in [c2 - 1, c2, c2 + 1])
                
            return res
        
        return dfs(0, 0, n - 1)