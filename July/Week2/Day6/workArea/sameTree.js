/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 1st tree
class TreeNode1 {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// 2nd tree
class TreeNode2 {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/*var TreeNode2 = (val, left, right) => {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}*/


var isSameTree = function (p, q) {

};

/*var preOrder = (tree) => {
    let preOrderArray = []
    if (tree === null) return;
    preOrderArray.push(tree.val);
    preOrder(tree.left);
    preOrder(tree.right);

    console.log(preOrderArray);
}*/

var levelOrder = (tree) => {
    let height_binary_tree = height(tree);
    let levelOrderArray = []
    for (let i = 1; i <= height_binary_tree; i++) {
        levelOrderArray.push(getLevelItem(tree, i));
    }

    return levelOrderArray;
}

var height = (tree) => {
    if (tree == null) return 0;
    else {
        let lheight = height(tree.left);
        let rheight = height(tree.right);

        return (lheight > rheight) ? (lheight + 1) : (rheight + 1);
    }
}

var getLevelItem = (root, level, ele = []) => {
    if (root === null) return;
    if (level === 1) ele.push(root.val);
    else if (level > 1) {
        getLevelItem(root.left, level - 1, ele);
        getLevelItem(root.right, level - 1, ele);
    }
    return ele;
}

var arrayEqual = (a, b) => {
    // console.log(Array.isArray(a), Array.isArray(b));
    a.every((v,i) => console.log(v === b[i]));
    // return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => v === b[i]);
}

// main function to initialize both the trees
const main = () => {
    // initializing the first tree
    const root1 = new TreeNode1(1);
    root1.left = new TreeNode1(2);
    root1.right = new TreeNode1(3);

    // initializing the second tree
    const root2 = new TreeNode2(1);
    root2.left = new TreeNode2(2);
    root2.right = new TreeNode2(3);

    // checking whether the two binary trees are equal or not.
    // isSameTree(root1,root2);

    // console.log(root1);
    // LevelOrder
    // console.log(levelOrder(root1));
    // console.log(levelOrder(root2));

    // checking whether the two binary tree arrays are equal or not
    console.log(arrayEqual(levelOrder(root1), levelOrder(root2)));
}

main();