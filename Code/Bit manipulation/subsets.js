var ans=[]
const subset=(arr)=>{
    var res=""
    
    for(let i=0;i<(1<<arr.length);i++){
        res=""
        for(let j=0;j<arr.length;j++){
            if(i & (1<<j)){
                res+=arr[j] 
                ans.push(res)
            }
        }
    }
}
subset(["a","b","c"])
console.log(ans)