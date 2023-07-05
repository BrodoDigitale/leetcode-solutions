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
    //two pointers method
    let fastPointer = head;
    let slowPointer = head;
    while(fastPointer) {
        temp = fastPointer.next;
        if (temp) {
            fastPointer = temp.next
            slowPointer = slowPointer.next;
        } else {
            fastPointer = temp;
        }
    }
    return slowPointer;
};