var climbStairs = function(n) {
    if(n<=0)
        return 0
    if(n===1)
        return 1
    if(n===2)
        return 2
    var first=1
    var second=2
    var fib=0
    
    for(let i=3;i<=n;i++){
        fib=first+second
        first=second
        second=fib
    }
    return fib
}
