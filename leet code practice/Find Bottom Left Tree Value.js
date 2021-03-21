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
var findBottomLeftValue = function(root) {
    var queue=[]
    var lvl=0
    var res=0
    queue.push(root)
    
    while(queue.length!==0){
        var size=queue.length
        
        for(let i=0;i<size;i++){
            var removed=queue.shift()
            if(!removed.left && !removed.right)
                res=removed.val
            if(removed.right)
                queue.push(removed.right)
            if(removed.left)
                queue.push(removed.left)
        }
    }

    return res
};