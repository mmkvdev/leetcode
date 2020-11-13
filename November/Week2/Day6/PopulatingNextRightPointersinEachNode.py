"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root or not root.left: return root
        
        self.connect(root.left)
        self.connect(root.right)
        
        lft = root.left
        rgh = root.right
        lft.next = rgh

        while lft.right: 
            lft = lft.right
            rgh = rgh.left
            lft.next = rgh
        
        return root