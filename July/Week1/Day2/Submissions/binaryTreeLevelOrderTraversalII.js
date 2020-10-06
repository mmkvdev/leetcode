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
var levelOrderBottom = function(root) {
    let height_ = height(root);
    const levelOrderArray = [];
    for(let i = 1; i <= height_ ; i++) {
        levelOrderArray.push(getLevelOrderElements(root,i));
    }
    return levelOrderArray.reverse();
};

const height = (root) => {
    if(root === null) return 0;
    else {
        const lheight = height(root.left);
        const rheight = height(root.right);
        
        return (lheight>rheight) ? (lheight+1):(rheight+1);
    }
}

const getLevelOrderElements = (root, level, element_level = []) => {
    if (root === null) return;
    if(level === 1) element_level.push(root.val);
    else if(level > 1) {
        getLevelOrderElements(root.left,level-1,element_level);
        getLevelOrderElements(root.right,level-1,element_level);
    }
    return element_level;
}