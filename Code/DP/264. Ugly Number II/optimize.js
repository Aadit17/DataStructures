/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    
    var uglynums=[1]
    var i=0;
    var j=0;
    var k=0;
    while(uglynums.length<n){
        var by2=uglynums[i]*2
        var by3=uglynums[j]*3
        var by5=uglynums[k]*5
        var min = Math.min(by2,by3,by5)
        uglynums.push(min)
        if(min===by2)
            i++
        if(min===by3)
            j++
        if(min===by5)
            k++
    }
    // console.log(uglynums)
    return uglynums[uglynums.length-1]
    
};