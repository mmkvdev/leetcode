/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let curr = head;
    let prev;
    let totalNum = 0;
    while (curr) {
        if (prev) curr.prev = prev;
        prev = curr;
        curr = curr.next;
        totalNum++;
    }

    curr = head;
    let tail = prev;
    let last;
    while (totalNum > 0) {
        if (totalNum === 1) {
            if (last) last.next = curr;
            curr.next = null;
            return;
        }

        const currNext = curr.next;
        const tailNext = tail.prev;

        if (last) last.next = curr;
        curr.next = tail;
        tail.next = null; // necessary to avoid circular reference error
        last = tail;

        curr = currNext;
        tail = tailNext;

        totalNum -= 2;
    }

    return head;
};
