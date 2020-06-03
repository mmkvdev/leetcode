# Node Class
class Node:

    # constructor for initialising the node
    def __init__(self, data):
        self.data = data
        self.next = None


# LinkedList Class
class LinkedList:

    def __init__(self):
        self.head = None

    # delete Node
    def deleteNode(self, node):

        prev = self.head
        temp = self.head
        while(temp):
            if(temp.data == node.data):
                print('after')
                prev.next = temp.next
            temp = temp.next

    # printing the linked list
    def printList(self):
        temp = self.head

        while(temp):
            print(temp.data)
            temp = temp.next


if __name__ == '__main__':

    llist = LinkedList()
    llist.head = Node(1)
    second = Node(2)
    third = Node(3)

    llist.head.next = second
    second.next = third

    llist.printList()
    llist.deleteNode(second)
    llist.printList()
