var res=[]
    var ds=[]
    var candidates = [2,3,6,7]
    var target = 7
         const combsum=(arr,traget,i,ds)=>{
             // console.log(arr.length)
             if(i === arr.length){
                 if(target== 0){
                     res.push(ds)
                 }
                 
                 return
             }
             
             if(arr[i]<=target){
                 ds.push(arr[i])
                 combsum(arr,target-arr[i],i,ds)
                 ds.pop()
             }
             combsum(arr,target,i+1,ds)
         } 
         combsum(candidates,target,0,ds)
    console.log(res)
    