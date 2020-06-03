# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:

    def __init__(self):
        self.head = None

    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        # prev = self.head
        if(node == None):
            return
        else:
            while(node.next != None):
                node.val = node.next.val
                prev = node
                node = node.next
            prev.next = None

    def printList(self):
        temp = self.head

        while(temp):
            print(temp.val)
            temp = temp.next


if __name__ == '__main__':

    listnode = Solution()
    listnode.head = ListNode(4)
    second = ListNode(5)
    third = ListNode(1)
    fourth = ListNode(9)

    listnode.head.next = second
    second.next = third
    third.next = fourth

    listnode.deleteNode(third)
    listnode.printList()

