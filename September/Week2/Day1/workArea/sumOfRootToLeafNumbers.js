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
 function callDFS(node, str) {
        if(!node) return 0;
        str += node.val
        if(!node.left && !node.right) return parseInt(str, 2);
        return callDFS(node.right, str) + callDFS(node.left, str);
    }
    return callDFS(root, '');
 */
var sumRootToLeaf = function (root) {
    // console.log(root[0]);
    /*while(root !== null) {
        console.log(root.val);
        root = root.right
    }*/

    function recursiveRoot(tree, str) {
        if (!tree) return 0;
        str += tree.val;
        if (!tree.left && !tree.right) return parseInt(str, 2);
        return recursiveRoot(tree.right, str) + recursiveRoot(tree.left, str);
    }

    return recursiveRoot(root, '');
};
