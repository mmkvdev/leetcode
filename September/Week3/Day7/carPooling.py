class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        m = max([i for _,_,i in trips])
        times = [0]*(m+2)
        for i,j,k in trips:
            times[j+1] += i
            times[k+1] -= i
        return max(accumulate(times)) <= capacity  