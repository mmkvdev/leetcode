# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        dic = defaultdict(list)
        self.min_l, self.max_l = float("inf"), -float("inf")
        def dfs(root, lvl_h, lvl_v):
            self.min_l = min(lvl_h, self.min_l)
            self.max_l = max(lvl_h, self.max_l)
            dic[lvl_h].append((lvl_v, root.val))
            if root.left:  dfs(root.left,  lvl_h-1, lvl_v+1)
            if root.right: dfs(root.right, lvl_h+1, lvl_v+1)
        
        dfs(root, 0, 0)
        res = []
        for i in range(self.min_l, self.max_l + 1):
            res += [[j for i,j in sorted(dic[i])]]
        return res