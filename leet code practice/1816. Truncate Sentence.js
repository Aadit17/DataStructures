/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    var arr=[]
    str=""
    for(let i=0;i<s.length;i++){
        
        if(s[i]===" "){
            arr.push(str)
            str=" "
            continue
        }
        str+=s[i]
    }
    arr.push(str)
    // console.log(arr.join(""))
    // console.log(arr.length)
    var olen=arr.length
    for(let i=1;i<=olen-k;i++){
        arr.pop()
    }
    
    return arr.join("").toString()
};