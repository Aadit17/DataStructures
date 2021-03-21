var minOperations = function(boxes) {
    var map=[]
    var res=[]
    for (let i=0;i<boxes.length;i++){
        if(boxes[i]==1)
            map.push(i)
    }
    for(let i=0;i<boxes.length;i++){
        var sum=0
        for(j of map){
            sum+=Math.abs(j-i)
        }
        res.push(sum)
    }
    return res
}