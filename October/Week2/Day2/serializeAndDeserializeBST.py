# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        if not root: return ""
        stack, out = [root], []
        while stack:
            cur = stack.pop()
            out.append(cur.val)
            for child in filter(None, [cur.right, cur.left]):
                stack += [child]
                
        return ' '.join(map(str, out))

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        preorder = [int(i) for i in data.split()]
        def helper(down, up):
            if self.idx >= len(preorder): return None
            if not down <= preorder[self.idx] <= up: return None
            root = TreeNode(preorder[self.idx])
            self.idx += 1
            root.left = helper(down, root.val)
            root.right = helper(root.val, up)
            return root
            
        self.idx = 0
        return helper(-float("inf"), float("inf"))

# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans