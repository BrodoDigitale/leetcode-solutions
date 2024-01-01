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
    //recursive solution
    const res = [];

    function inorder(node) {
        if(!node) {
            return;
        }
        //firts traverse left part of the tree
        inorder(node.left);
        res.push(node.val);
        //traverse right part of the tree
        inorder(node.right);
    }

    inorder(root);
    return res;
};
