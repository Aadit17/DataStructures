/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    if(s==="")
        return 0
        
    const ispallindrome=(s)=>{
        var i=0 
        var j=s.length-1
        while(i<j){
            if(s[i]===s[j]){
                i++;
                j--
            }
            else
                return 0
        }
        return 1
        }
    if(ispallindrome(s))
        return 1
    else
        return 2
    };