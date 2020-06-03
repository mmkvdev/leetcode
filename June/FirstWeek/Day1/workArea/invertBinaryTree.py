class Node:
    def __init__(self, data):
        self.val = data
        self.left = None
        self.right = None

# InOrder
def InOrder(node):
    if node:
        InOrder(node.left)
        print('InOrder: ', node.val)
        InOrder(node.right)

# PreOrder
def PreOrder(node):
    if node:
        print('PreOrder: ', node.val)
        PreOrder(node.left)
        PreOrder(node.right)

# PostOrder
def PostOrder(node):
    if node:
        PostOrder(node.left)
        PostOrder(node.right)
        print('Post Order:', node.val)


def invertTree(node):
    if (node == None):
        return

    else:
        invertTree(node.left)
        invertTree(node.right)

        temp = node.left
        node.left = node.right
        node.right = temp


if __name__ == '__main__':
    node = Node(4)
    node.left = Node(2)
    node.left.left = Node(1)
    node.left.right = Node(3)
    node.right = Node(7)
    node.right.left = Node(6)
    node.right.right = Node(9)

    '''node =Node(1)
    node.left=Node(2)
    node.right=Node(3)
    node.left.left=Node(4)
    node.left.right=Node(5)
    '''  # node.printList()

    # Depth-First Traversals
    invertTree(node)
    InOrder(node)
    # PreOrder(node)
    # PostOrder(node)
