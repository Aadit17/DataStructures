
var countPath=(start,end)=>{
    if(start==end)
        return 1
    if(start>end)
        return 0
    var count=0
    for(let i=1;i<=6;i++){
       count+= countPath(start+i,end)
    }
    return count
}

console.log(countPath(0,3))