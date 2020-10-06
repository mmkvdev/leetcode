class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordSet = set(wordDict)
        n = len(s)
   
        @lru_cache(None)
        def dfs(k):
            if k == n: return True
            for i in range(k + 1, n + 1):
                if s[k:i] in wordSet and dfs(i):
                    return True        
            return False
        
        return dfs(0)