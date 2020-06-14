
import heapq
import collections

class Solution:
    def findCheapestFlightwithinKstops(self,n,flights,src,dist,K):
        adj = collections.defaultdict(list)
        for u, v, w in flights:
            adj[u].append((v, w))
        min_heap = [(0, src, K+1)]
        while min_heap:
            result, u, k = heapq.heappop(min_heap)
            if u == dist:
                return result
            if k > 0:
                for v, w in adj[u]:
                    heapq.heappush(min_heap, (result+w, v, k-1))
        return -1

if __name__ == '__main__':
    solution = Solution()
    print(solution.findCheapestFlightwithinKstops(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,0))