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
var reverseList = function(head) {
    if(!head) {
        return null;
    }
    
    let curr = head;
    let prevNode = null;
    let nextNode = null;

    while(curr) {
        nextNode = curr.next;
        curr.next = prevNode;
        prevNode = curr;
        curr = nextNode;
        nextNode = null;
    }

    curr = prevNode;
    return curr;
};