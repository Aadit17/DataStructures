/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max=0;
    var rightmax=[]
    rightmax[prices.length-1]=prices[prices.length-1]
    for(let i=prices.length-2;i>=0;i--){
        if(prices[i]>rightmax[i+1])
            rightmax[i]=prices[i]
        else
            rightmax[i]=rightmax[i+1]
    }
    console.log(rightmax)
    var temp=0;
    for(let i=0;i<prices.length;i++){
        temp=rightmax[i]-prices[i]
        if(temp>max)
            max=temp
    }
    return max;
};