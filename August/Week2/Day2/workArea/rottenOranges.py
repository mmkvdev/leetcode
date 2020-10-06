class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # print(grid)
        '''minuteCounter = 0
        for i in range(len(grid)):
            # print(i)
            for j in range(len(grid)):
                # print(grid[i][j])
                if grid[i][j] == 2:
                    # minuteCounter += 1
                    # print('Hey', minuteCounter)
                    if (i-1) > 0 or (j-1) > 0 or (i+1) > 0 and (i+1) < len(grid) and (j+1) > 0 and (j+1) < len(grid):
                        grid[i-1][j] = 2
                        grid[i+1][j] = 2
                        grid[i][j-1] = 2
                        grid[i][j+1] = 2

                        minuteCounter += 1
                    
                else:
                    continue
                    
        return minuteCounter'''
        m, n, queue, fresh = len(grid), len(grid[0]), deque(), 0
        for i,j in product(range(m), range(n)):
            if grid[i][j] == 2: queue.append((i,j))
            if grid[i][j] == 1: fresh += 1
        dirs = [[1,0],[-1,0],[0,1],[0,-1]]
        levels = 0
        
        while queue:
            levels += 1
            for _ in range(len(queue)):
                x, y = queue.popleft()
                for dx, dy in dirs:
                    if 0<=x+dx<m and 0<=y+dy<n and grid[x+dx][y+dy] == 1:
                        fresh -= 1
                        grid[x+dx][y+dy] = 2
                        queue.append((x+dx, y+dy))
                        
        return -1 if fresh != 0 else max(levels-1, 0)
        