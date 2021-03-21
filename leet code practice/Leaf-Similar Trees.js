/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function(root1, root2) {
    
    var arr1=[]
    var arr2=[]
    
    leafvalues(root1,arr1)
    leafvalues(root2,arr2)
        
        console.log(arr1,arr2)
            if(arr1.length != arr2.length) return false;
        for(let i=0; i < arr1.length; ++i) {
            if(arr1[i] != arr2[i]) return false;
        }
        return true;
        
    };
        
        
    const leafvalues=(root,arr)=>{
        if(!root)
            return 
        if(root.left===null && root.right===null)
            return arr.push(root.val)
        else{
           return leafvalues(root.left,arr)+leafvalues(root.right,arr)
        }
        
    }
    
        
        