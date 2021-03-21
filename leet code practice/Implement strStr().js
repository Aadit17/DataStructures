/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     var count=0
//     var res=0
//     var j=0;
//     if(haystack==="" && needle==="")
//         return 0
//     if(!needle)
//         return 0
    
//     for(let i=0;i<haystack.length;i++){
    
//          if(haystack[i]===needle[j]){
//             count++
//              j++
//           if(count===1){
//                 res=i
//           }
//              console.log(count)
//           if(count===needle.length){
//                 return res
//           }
                
//         }
//     }
//     return -1
// };


var strStr = function(haystack, needle) {
    var j=needle.length
    
     if(haystack==="" && needle==="")
        return 0
    if(!needle)
        return 0

    
    for(let i=0;i<haystack.length;i++){
        // console.log(haystack.substr(i,j))
        if(haystack.substr(i,j)===needle)
            return i
    }
    return -1
}
















