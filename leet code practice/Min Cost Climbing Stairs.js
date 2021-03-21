var minCostClimbingStairs = function(cost) {
    
    if(cost.length===0)
        return 0
    if(cost.length===1)
        return cost[0]
    if(cost.length===2)
        return Math.min(cost[0],cost[1])
    var dp=[]
    dp[0]=cost[0]
    dp[1]=cost[1]
    cost.push(0);
    for(let i=2;i<cost.length;i++){
        dp[i]=Math.min(cost[i]+dp[i-2],cost[i]+dp[i-1])
    }
    console.log(dp)
    return dp[dp.length-1]

    
};