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
var verticalTraversal = function(root) {
    const map = new Map();
    let queue = [[root, 0]];
    
    while(queue.length) {
        const cols = new Map(), next = [];
        
        for(let [node, x] of queue) {
            if(!cols.has(x)) cols.set(x, [node.val]);
            else cols.get(x).push(node.val);
            
            if(node.left) next.push([node.left, x-1]);
            if(node.right) next.push([node.right, x+1]);
        }
        
        for(let [x, val] of cols) {
            if(!map.has(x)) map.set(x, []);
            map.get(x).push(...val.sort((a, b) => a - b));
        }
        queue = next;
    }
    return [...[...map.entries()].sort((a, b) => a[0] - b[0]).map(x => x[1])]
};