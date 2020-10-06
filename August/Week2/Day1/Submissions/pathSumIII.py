# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        def countDetermine(root, prevSum):

            if not root:
                return

            currentSum = prevSum + root.val

            valFind = currentSum - sum

            if valFind in counterSum:
                self.count += counterSum[valFind]
            if currentSum in counterSum:
                counterSum[currentSum] += 1
            else:
                counterSum[currentSum] = 1

            countDetermine(root.left, currentSum)
            countDetermine(root.right, currentSum)
            counterSum[currentSum] -= 1

        self.count = 0
        counterSum = {0: 1}
        countDetermine(root, 0)

        return self.count
