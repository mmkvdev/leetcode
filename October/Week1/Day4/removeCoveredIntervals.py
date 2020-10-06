class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: (x[0], -x[1]))
        right, rem, n = -1, 0, len(intervals)
        for _, end in intervals:
            if end <= right:
                rem += 1
            else:
                right = end
        return n - rem