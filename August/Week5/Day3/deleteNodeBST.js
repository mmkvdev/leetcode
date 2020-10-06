/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root === null) {
        return root;
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null && root.right === null) {
            root = null;
        } else if (root.left === null && root.right !== null) {
            root = root.right;
        } else if (root.left !== null && root.right === null) {
            root = root.left;
        } else {
            let minVal = findMinNode(root.right);
            root.val = minVal.val;
            root.right = deleteNode(root.right, root.val);
        }
    }

    return root;
};

var findMinNode = function (root) {
    let current = root;
    while (current.left !== null) {
        current = current.left;
    }

    return current;
};
