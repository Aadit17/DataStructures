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
 * @return {boolean}
 */


var isSymmetric = function(root) {
    
    if(!root)
        return true
    return subtree(root.left,root.right)
};


const subtree=(root1,root2)=>{
if(!root1 && !root2)
    return true
else if(!root1 || !root2)
    return false

else if(root1.val !== root2.val)
    return false

else{
   return subtree(root1.left,root2.right) * subtree(root1.right,root2.left)
}
}
