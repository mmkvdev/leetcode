# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:

        if(root == None):
            return
        else:
            self.invertTree(root.left)
            self.invertTree(root.right)

            temp = root.left
            root.left = root.right
            root.right = temp

            return root

    def InOrder(self,root):
        if root == None:
            return
        else:
            self.InOrder(root.left)
            print(root.val)
            self.InOrder(root.right)
            # return root

if __name__ == '__main__':

    node=TreeNode(4)
    node.left = TreeNode(2)
    node.left.left = TreeNode(1)
    node.left.right = TreeNode(3)
    node.right = TreeNode(7)
    node.right.left = TreeNode(6)
    node.right.right = TreeNode(9)

    invertTreeSOl = Solution()
    invertTreeSOl.invertTree(node)
    invertTreeSOl.InOrder(node)