# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        def dfs(tree):
            if not tree:
                return float("inf")
            if not tree.left and not tree.right:
                return 1
            return min(dfs(tree.left), dfs(tree.right))+1
        
        depth = dfs(root)
        
        return depth if depth != float("inf") else 0