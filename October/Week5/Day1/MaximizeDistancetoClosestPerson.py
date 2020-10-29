class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        out = max(seats[::-1].index(1), seats.index(1))
        for seat, group in groupby(seats):
            if seat: continue
            out = max(out, (len(list(group))+1)//2)

        return out