/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    var res=[]
    for(let i=0;i<prices.length;i++){
        var finalprice=prices[i]
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]<=prices[i]){
                finalprice=prices[i]-prices[j]
                break;
            }
        }res.push(finalprice)
    }
    return res
};