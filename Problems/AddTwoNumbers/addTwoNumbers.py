# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        temp = ListNode()
        tempCur = temp
        carry = 0
        while l1 or l2 or carry:
            l1Sum = l1.val if l1 else 0
            l2Sum = l2.val if l2 else 0
            
            rootSum = l1Sum + l2Sum + carry
            carry = rootSum // 10
            rootSum %= 10
            tempCur.next = ListNode(rootSum)
            tempCur = tempCur.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            
        return temp.next