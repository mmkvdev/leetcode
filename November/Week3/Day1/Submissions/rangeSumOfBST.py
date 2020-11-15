# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        def sumBST(root: TreeNode):
            
            if not root:
                return
            
            if low <= root.val <= high:
                self.res += root.val
                
            if root.val > low:
                sumBST(root.left)
            
            if root.val < high:
                sumBST(root.right)
                
        self.res = 0
        sumBST(root)
        
        return self.res