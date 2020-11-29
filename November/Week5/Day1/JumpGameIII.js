class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        stack, visited, n = [start], set(), len(arr)
        
        while stack:
            pos = stack.pop()
            if arr[pos] == 0: return True
            visited.add(pos)
            cand1, cand2 = pos + arr[pos], pos - arr[pos]
            if cand1 <  n and cand1 not in visited: stack.append(cand1)
            if cand2 >= 0 and cand2 not in visited: stack.append(cand2)
                
        return False