var averageOfLevels = function(root) {
    var queue=[]
    var res=[]
    
    queue.push(root)
    while(queue.length!==0){
        var size=queue.length
        var num1=0
        for(let i=1;i<=size;i++){
            var removed=queue.shift()
            // console.log(removed.val)
            num1+=removed.val
            console.log(num1)
            if(i==size){
                num1=num1/i
                res.push(num1)
                num1=0
            }
            if(removed.left)
                queue.push(removed.left)
            if(removed.right)
                queue.push(removed.right)
        }
        console.log(res)
    }
    return res
};