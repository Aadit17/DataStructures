var isHappy = function(n) {
    var temp=n
    var map={}
    var happyNumber=(n)=>{
        map[n]=true
    sum = n.toString().split('').reduce(function (sum1,num){
                return sum1 + Math.pow(num, 2);
    },0)
    
        console.log(temp)
        if(sum==1)
            return true
        else if(map[sum]==true)
            return false
        else{
           return happyNumber(sum)
        }
    }
    return happyNumber(n)
};