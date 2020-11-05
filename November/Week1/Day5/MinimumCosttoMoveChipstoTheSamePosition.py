class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
            return min((odd := sum(1 for p in position if p%2)), len(position) - odd)
