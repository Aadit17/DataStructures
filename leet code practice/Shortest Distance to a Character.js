/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    var arr=[]
    var res=[]
    
    for(let i=0;i<s.length;i++){
        if(s[i]===c)
            arr.push(i)
    }
    
    for(let i=0;i<s.length;i++){
        var min=Number.MAX_VALUE
        for(let j=0;j<arr.length;j++){
             min=Math.min(Math.abs(i-arr[j]),min)
            
        }
         res.push(min)
    }
    return res
    
};