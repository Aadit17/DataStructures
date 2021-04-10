var weight=[25,25,35,15]
var value=[100,100,210,120]
var W=50


var dp=[]
for(let i=0;i<weight.length;i++){
    dp[i]=[]
    for(let j=0;j<=W+1;j++){
        dp[i][j]=-1
    }
}
console.log(dp)
const maxProfit=(weight,value,W,i,dp)=>{
    if(i>=weight.length)
        return 0;
    if(W===0)
        return 0
    if(dp[i][W]!==-1)
        return dp[i][W]

    if(weight[i]<=W){
    var left=value[i]+ maxProfit(weight,value,W-weight[i],i+1,dp)
    var right=maxProfit(weight,value,W,i+1,dp)
    return dp[i][W]=Math.max(left,right)
    }
    else{
        return dp[i][W] = maxProfit(weight,value,W,i+1,dp)
    }
}



console.log(maxProfit([25,25,35,15],[100,100,210,120],50,0,dp))

// console.log(dp)