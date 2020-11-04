class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        def dfs_helper(start, n):
            self.dist, self.parent = [-1]*n, [-1]*n
            self.dist[start] = 0
            dfs(start)
            return self.dist.index(max(self.dist))
        
        def dfs(start):
            for neib in Graph[start]:
                if self.dist[neib] == -1:
                    self.dist[neib] = self.dist[start] + 1
                    self.parent[neib] = start
                    dfs(neib)
                    
        Graph = defaultdict(set)
        for a,b in edges:
            Graph[a].add(b)
            Graph[b].add(a)
        
        ind = dfs_helper(0,n)
        ind2 = dfs_helper(ind, n)
        
        path = []
        while ind2 != -1:
            path.append(ind2)           #backtracking to create path
            ind2 = self.parent[ind2]
            
        Q = len(path)
        return list(set([path[Q//2], path[(Q-1)//2]]))