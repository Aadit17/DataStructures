var checkPowersOfThree = function(n) {
    // var res=0
    // var i=0
    // while(res<=n){
    //     res+=Math.pow(3,i++)
    //     if(res==n)
    //         return true
    // }
    // return false
    
    for(i=15;i>=0;i--){
        var x=Math.pow(3,i)
        if(x<=n) n-=x
        if(n==0) return true
    }
    return false
};