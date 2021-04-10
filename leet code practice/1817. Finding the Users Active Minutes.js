/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
 var findingUsersActiveMinutes = function(logs, k) {
    var map=new Map()
    for(let i=0;i<logs.length;i++){
       if(!map.has(logs[i][0]))
           map.set(logs[i][0],new Set())
        var v=map.get(logs[i][0])
         v.add(logs[i][1])
        map.set(logs[i][0],v)
    }
    console.log(map)
    var res=[]
    for(let i=0;i<k;i++)
        res[i]=0
   for(const [k,v] of map){
       res[v.size-1]++
   }
    return res
};