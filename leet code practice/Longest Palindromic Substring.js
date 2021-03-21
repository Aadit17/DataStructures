/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var Palindrome = (string)=>{
        var i=0;
        var j=string.length-1;
        while(i<j){
            if(string[i]!==string[j])
                return 0;
            i++;
            j--;
        }
        return 1;
    }

    var palstr=""
    for(let i=0;i<s.length;i++){
        
    var newstr=""
    
    
        for(let j=i;j<s.length;j++){
            newstr+=s[j];
            if(Palindrome(newstr)){
                if(newstr.length>palstr.length){
                    palstr=newstr
                }
            }
                
        }
    }
    return palstr;
};