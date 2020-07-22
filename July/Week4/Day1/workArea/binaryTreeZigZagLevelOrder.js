// creating a binary tree with [3,9,20,null,null,15,7]


class BinaryTreeZigZag {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const levelOrderTraversal = (tree) => {
    let height_zig = height(tree);
    let levelOrderArray = []
    for (let i = 1; i <= height_zig; i++) {
        levelOrderArray.push(getLevelOrderElements(tree, i));
    }

    return levelOrderArray;
}

const height = (tree) => {
    if (tree === null) return 0;
    else {
        let lheight = height(tree.left);
        let rheight = height(tree.right);

        return (lheight > rheight) ? (lheight + 1) : (rheight + 1);
    }
}


const getLevelOrderElements = (root, level, frag_ele = []) => {
    if (root === null) return;
    if (level === 1) frag_ele.push(root.val);
    else if (level === 2) {
        getLevelOrderElements(root.right, level - 1, frag_ele);
        getLevelOrderElements(root.left, level - 1, frag_ele);
    } else if (level === 3) {
        //console.log('I');
        getLevelOrderElements(root.left, level - 1, frag_ele);
        getLevelOrderElements(root.right, level - 1, frag_ele);
    }

    return frag_ele;
}
const main = () => {
    let bz = new BinaryTreeZigZag(3);
    bz.left = new BinaryTreeZigZag(9);
    bz.right = new BinaryTreeZigZag(20);
    bz.right.left = new BinaryTreeZigZag(15);
    bz.right.right = new BinaryTreeZigZag(7);

    // console.log(bz);
    console.log(levelOrderTraversal(bz));
}

main();