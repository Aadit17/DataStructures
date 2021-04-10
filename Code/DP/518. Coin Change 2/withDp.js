/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    var dp=[]
    for(let i=0;i<coins.length;i++){
        dp[i]=[]
        for(let j=0;j<=amount+1;j++){
            dp[i][j]=-1
        }
    }
    const count=(i,sum,coins,dp)=>{
        if(sum===0)
            return 1
        if(i>=coins.length||sum<0)
            return 0
        if(dp[i][sum]!==-1)
            return dp[i][sum]
        var left=count(i,sum-coins[i],coins,dp)
        var right=count(i+1,sum,coins,dp)
        return dp[i][sum]=left+right
    }
    return count(0,amount,coins,dp)
    
};
