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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)
        return []
    var queue=[]
    var res=[]
    var arr=[]
    queue.push(root)
    while(queue.length!==0){
        var size=queue.length
        for(let i=0;i<size;i++){
            var removed=queue.shift()
            // console.log(removed)
            arr.push(removed.val)
            if(i===size-1){
                res.push(arr)
                arr=[]
            }
            if(removed.left!=null)
                    queue.push(removed.left);
                 if(removed.right!=null)
                    queue.push(removed.right);
                 
        }
    }
    return res
};