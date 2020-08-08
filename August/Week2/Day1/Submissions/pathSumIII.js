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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {

    const countDetermine = (root, prevSum) => {
        if (!root) return

        let currentSum = prevSum + root.val;
        let valFind = currentSum - sum;

        if (valFind in counterSum) {
            count += counterSum[valFind];
        }

        if (currentSum in counterSum) {
            counterSum[currentSum] += 1
        }

        else {
            counterSum[currentSum] = 1
        }

        countDetermine(root.left, currentSum)
        countDetermine(root.right, currentSum)
        counterSum[currentSum] -= 1
    }

    let count = 0;
    counterSum = { 0: 1 };
    countDetermine(root, 0);

    return count;

};