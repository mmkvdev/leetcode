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
var widthOfBinaryTree = function (root) {
    if (root === null) return 0;

    let maxWidth = 0;
    let current = [{ node: root, index: 0n }];

    while (current.length > 0) {
        let levelWidth = current[current.length - 1].index - current[0].index + 1n;
        if (levelWidth > maxWidth) maxWidth = levelWidth;

        current = current.flatMap(x => {
            let children = [];
            if (x.node.left !== null) children.push({ node: x.node.left, index: 2n * x.index + 1n });
            if (x.node.right !== null) children.push({ node: x.node.right, index: 2n * x.index + 2n });
            return children;
        });
    }

    return maxWidth;
};