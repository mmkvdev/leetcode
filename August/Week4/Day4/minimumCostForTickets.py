class Solution(object):
    def mincostTickets(self, days, costs):
        """
        :type days: List[int]
        :type costs: List[int]
        :rtype: int
        """
        k, P, cost = 3, [1,7,30], 0
        Q = [deque() for _ in range(k)]

        for d in days:
            for i in range(k):
                while Q[i] and Q[i][0][0] + P[i] <= d: Q[i].popleft()
                Q[i].append([d, cost + costs[i]])
         
            cost = min([Q[i][0][1] for i in range(k)])

        return cost