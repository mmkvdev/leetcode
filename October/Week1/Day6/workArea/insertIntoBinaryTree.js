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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    var dfs = (root) => {
        if (val < root.val) {
            if (root.left) {
                dfs(root.left);
            } else {
                root.left = new TreeNode(val);
            }
        } else {
            if (root.right) {
                dfs(root.right);
            } else {
                root.right = new TreeNode(val);
            }
        }
    };
    if (!root) {
        return new TreeNode(val);
    }
    dfs(root);
    return root;
};
