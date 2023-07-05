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
    let listSize = 0;
    let node = head;
    while(node) {
        listSize++;
        node = node.next
    }
    const middleIndex = Math.trunc(listSize / 2);
    let middleNode = head;
    let counter = 0;
    while(counter < middleIndex) {
        counter++;
        middleNode = middleNode.next
    }
    return middleNode;
};