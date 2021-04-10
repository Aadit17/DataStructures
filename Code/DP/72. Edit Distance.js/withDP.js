/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    
    var dp=[]
    for(let i=0;i<word1.length;i++){
        dp[i]=[]
        for(let j=0;j<word2.length;j++){
            dp[i][j]=-1
        }
    }
    
    const editDist=(s1,s2,i,j,dp)=>{
      
        if(i===s1.length){
            return s2.length-j
        }
        if(j===s2.length){
            return s1.length-i
        }
        
          if(dp[i][j]!==-1)
            return dp[i][j]
        
        if(s1[i]===s2[j])
            return editDist(s1,s2,i+1,j+1,dp)
        else{
            var left=1 + editDist(s1,s2,i,j+1,dp)
            var mid=1+ editDist(s1,s2,i+1,j,dp)
            var right=1+ editDist(s1,s2,i+1,j+1,dp)
            
            return dp[i][j]=Math.min(left,mid,right)
        }
    }
    
    return editDist(word1,word2,0,0,dp)
    
    
};