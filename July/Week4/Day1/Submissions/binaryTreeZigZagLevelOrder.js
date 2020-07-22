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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [
        [root, 0]
    ];

    while (queue.length) {
        const [node, gen] = queue.shift();

        if (result[gen]) {
            if (gen % 2 === 0) result[gen].push(node.val);
            else result[gen].unshift(node.val);
        } else result[gen] = [node.val];

        if (node.left) queue.push([node.left, gen + 1]);
        if (node.right) queue.push([node.right, gen + 1]);
    }
    return result;
};