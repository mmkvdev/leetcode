# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:
            self.maxVal = 0
            
            def dfs(root, low, high):
                
                if not root:
                    return
                
                self.maxVal = max(self.maxVal, abs(root.val-low), abs(root.val-high))
                lowVal, highVal = min(low, root.val), max(high, root.val)
                
                dfs(root.left, lowVal, highVal)
                dfs(root.right, lowVal, highVal)
                
            dfs(root, root.val, root.val)
            return self.maxVal