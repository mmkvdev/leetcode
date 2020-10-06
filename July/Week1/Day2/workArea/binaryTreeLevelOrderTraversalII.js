// level order uses a Breadth First Traversal Approach


class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const levelOrderBottom = (root) => {
    let height_binary_tree = height(root);
    let reverse_binary_tree = [];
    for (let i = 1; i <= height_binary_tree; i++) {
        reverse_binary_tree.push(getLevel(root, i));
    }
    return reverse_binary_tree.reverse();
};

const height = (root) => {
    if (root === null) return 0;
    else {
        let lheight = height(root.left);
        let rheight = height(root.right);

        return (lheight > rheight) ? (lheight + 1) : (rheight + 1);
    }
}

const getLevel = (root, level, frag_ele=[]) => {
    if (root === null) return;
    if (level === 1) frag_ele.push(root.val);
    else if (level > 1) {
        getLevel(root.left, level - 1,frag_ele);
        getLevel(root.right, level - 1,frag_ele);
    }
    return frag_ele;
}

const main = () => {
    root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);

    console.log(levelOrderBottom(root));
}

main();