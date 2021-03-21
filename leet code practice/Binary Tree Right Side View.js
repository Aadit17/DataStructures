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
var rightSideView = function(root) {
    
    var arr=[]
    
        if(!root)
        return arr
        
        const subTree=(root,lvl)=>{
            console.log(lvl);
            if(root){
                arr[lvl]=root.val
            if(root.left){
                 subTree(root.left,lvl+1)
            }
            subTree(root.right,lvl+1)
            
            }
        
        }
        subTree(root,0)
    return arr
    
};