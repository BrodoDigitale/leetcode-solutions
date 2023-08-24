/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let res = new ListNode();
    let curr = res;

    let temp = 0;
    while(l1 || l2 ) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + temp;

        if(sum > 9) {
            temp = 1;
            sum = sum % 10;
        } else {
            temp = 0;
        }
        curr.val = sum;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if(l1 || l2) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }

    if(temp > 0) {
        curr.next = new ListNode(temp);
    }

    return res;
    
};