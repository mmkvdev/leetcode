# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        self.Bal = True
        
        def dfs(node):
            if not node: return 0
            lft, rgh = dfs(node.left), dfs(node.right)
            if abs(lft - rgh) > 1: self.Bal = False
            return max(lft, rgh) + 1
            
        dfs(root)
        return self.Bal
        