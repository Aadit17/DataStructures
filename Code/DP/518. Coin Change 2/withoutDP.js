/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    const count=(i,sum,coins)=>{
        if(sum===0)
            return 1
        if(i>=coins.length||sum<0)
            return 0
        var left=count(i,sum-coins[i],coins)
        var right=count(i+1,sum,coins)
        return left+right
    }
    return count(0,amount,coins)
    
};
