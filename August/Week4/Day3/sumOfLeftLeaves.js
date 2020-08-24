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
 * @return {number}
 */
// let sum = ''
var sumOfLeftLeaves = function (root) {
    let sum = 0;

    const internalSum = (tree) => {
        if (!tree) return 0;
        if (!tree.left && !tree.right) return tree.val;

        let leftChild = internalSum(tree.left);
        if (leftChild) sum += leftChild;

        internalSum(tree.right);
    };

    internalSum(root);
    return sum;
};
