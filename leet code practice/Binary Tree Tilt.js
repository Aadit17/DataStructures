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
var findTilt = function(root) {
    
    if(!root)
        return 0
    else{
        return findTilt(root.left) + findTilt(root.right) + Math.abs(subValues(root.left)-subValues(root.right))
    }
    
};

const subValues=(root)=>{
    if(!root)
        return 0
    else{
        return subValues(root.left)+subValues(root.right) + root.val
    }
}