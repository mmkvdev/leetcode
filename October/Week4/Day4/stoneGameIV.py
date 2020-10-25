class Solution:
    def winnerSquareGame(self, n: int) -> bool:
        @lru_cache(None)
        def dfs(state):
            if state == 0: return False
            for i in range(1, int(math.sqrt(state))+1):
                if not dfs(state - i*i): return True
            return False
        
        return dfs(n)