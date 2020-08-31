# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        # print(root,key)
        if root == None:
            return root
        
        if key < root.val:
            root.left = self.deleteNode(root.left,key)
        elif key > root.val:
            root.right = self.deleteNode(root.right,key)
            
        else:
            if root.left == None and root.right == None:
                root = None
            
            elif root.left == None and root.right != None:
                root = root.right
            elif root.left != None and root.right == None:
                root = root.left
            else:
                minVal = self.findMinNode(root.right)
                root.val = minVal.val
                root.right = self.deleteNode(root.right, root.val)
                
        return root
                
    def findMinNode(self, root: TreeNode) -> TreeNode:
        current = root
        while(current.left is not None):
            current = current.left
            
        return current
            