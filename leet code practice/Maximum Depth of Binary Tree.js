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
 * @return {number}
 */
var maxDepth = function(root) {
    var x=0;
    var y=0;
    if(root === null){
        return 0;
    }
    else{
        x=maxDepth(root.left)
        y=maxDepth(root.right)
    }
    return x>y?x+1:y+1
};