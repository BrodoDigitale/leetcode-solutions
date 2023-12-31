/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    //two pointers method IMPROVED
    let fastPointer = head;
    let slowPointer = head;
    while(fastPointer && fastPointer.next) {
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
    }
    return slowPointer;
};