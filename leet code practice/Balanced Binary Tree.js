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
var isBalanced = function(root) {
    
    if(!root)
        return true
    
         var a=isBalanced(root.left)
         var b=isBalanced(root.right)
         var l= countHeight(root.left)
         var r= countHeight(root.right)
        
        // console.log(l,r)
        if(l>r)
            var res=l-r
        else
            res=r-l
        
        return (res<=1?true:false)&a&b
};

const countHeight=(root)=>{
    
    if(!root)
        return 0
    else{
           var l= countHeight(root.left)
           var r= countHeight(root.right)
           return l>r ? l+1:r+1
    }
}
