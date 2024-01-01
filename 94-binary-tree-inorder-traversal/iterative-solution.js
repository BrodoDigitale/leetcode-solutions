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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    //iterative solution
    const res = [];
    //implements a stack to keep track of left side values
    const stack = [];
    //current pointer
    let cur = root;

    while(cur || stack.length) {
        //put all availiable left nodes into the stack
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        //take nodes one by one
        cur = stack.pop();
        //value goes to the result
        res.push(cur.val);
        //right node is processed and goes into the stack if exists
        cur = cur.right;
    }

    return res;
};
