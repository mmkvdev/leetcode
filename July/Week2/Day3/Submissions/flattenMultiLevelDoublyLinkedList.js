/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head, tail = null) {
    if (head === null) return null;

    if (head.next !== null) {
        flatten(head.next, tail);
    } else if (tail !== null) {
        head.next = tail;
        tail.prev = head;
    }

    if (head.child !== null) {
        head.next = flatten(head.child, head.next);
        head.next.prev = head;
        head.child = null;
    }

    return head;
};