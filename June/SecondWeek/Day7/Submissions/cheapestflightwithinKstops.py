import heapq
import collections

class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, K: int) -> int:
        adj = collections.defaultdict(list)
        for u, v, w in flights:
            adj[u].append((v, w))
        min_heap = [(0, src, K+1)]
        while min_heap:
            result, u, k = heapq.heappop(min_heap)
            if u == dst:
                return result
            if k > 0:
                for v, w in adj[u]:
                    heapq.heappush(min_heap, (result+w, v, k-1))
        return -1