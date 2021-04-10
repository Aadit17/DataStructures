/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    
    const editDist=(s1,s2,i,j)=>{
        if(i===s1.length){
            return s2.length-j
        }
        if(j===s2.length){
            return s1.length-i
        }
        if(s1[i]===s2[j])
            return editDist(s1,s2,i+1,j+1)
        else{
            var left=1 + editDist(s1,s2,i,j+1)
            var mid=1+ editDist(s1,s2,i+1,j)
            var right=1+ editDist(s1,s2,i+1,j+1)
            
            return Math.min(left,mid,right)
        }
    }
    
    return editDist(word1,word2,0,0)
    
    
};