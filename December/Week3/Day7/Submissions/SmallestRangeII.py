class Solution:
    def smallestRangeII(self, A: List[int], K: int) -> int:
        A.sort()
        n, ans = len(A), float("inf")

        for i in range(n-1):
            cands = [A[0], A[i], A[i+1] - 2*K, A[-1] - 2*K]
            ans = min(ans, max(cands) - min(cands))
            
        return min(ans, A[-1] - A[0])