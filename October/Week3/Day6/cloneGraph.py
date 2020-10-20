"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node):
        def dfs(node):
            mapping[node] = Node(node.val)
            for neigh in node.neighbors:
                if neigh not in mapping: dfs(neigh)
                mapping[node].neighbors += [mapping[neigh]]
        
        if not node: return node
        mapping  = {}
        dfs(node)
        return mapping[node]
        