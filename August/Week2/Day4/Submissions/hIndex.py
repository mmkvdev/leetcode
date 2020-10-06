class Solution:
    def hIndex(self, citations: List[int]) -> int:
        k = sorted(citations)
        return max(min(j, len(citations)-i) for i, j in enumerate(k+[0]))
        