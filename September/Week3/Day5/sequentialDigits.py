class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        ans = []
        def dfs(cur, digit):
            if digit <= 10 and low <= cur <= high: ans.append(cur) 
            elif cur < low: pass                                   
            else: return                                          
            cur = cur * 10 + digit                                 
            dfs(cur, digit+1)                                      
        for i in range(1, 10): dfs(0, i)                           
        return sorted(ans)  