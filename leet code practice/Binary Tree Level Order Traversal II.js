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
var levelOrderBottom = function(root) {
    var arr=[]
    var res=[]
    var queue=[]
    if(!root)
        return []
    
    queue.push(root)
    
    while(queue.length!==0){
        var size=queue.length;
        for(i=0;i<size;i++){
            var removed=queue.shift()
            arr.push(removed.val)
            if(i === size-1){
                console.log(arr)
                res.push(arr)
                arr=[]
            }
            
        if(removed.left!== null)
            queue.push(removed.left)
        if(removed.right !== null)
            queue.push(removed.right)
        }
    }
    return res.reverse()
};