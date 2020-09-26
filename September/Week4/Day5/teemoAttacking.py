class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if len(timeSeries) == 0:
            return 0
        res = 0
        for i in range(0, len(timeSeries)-1):
            res += min(duration, timeSeries[i+1]-timeSeries[i]);
        return res + duration