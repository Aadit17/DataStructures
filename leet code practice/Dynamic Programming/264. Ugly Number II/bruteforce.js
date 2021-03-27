/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
    var arr=[]
    var i=1
    var temp=1
    while(arr.length !== n){
        i=temp
        while(i!==1){
         if(i%2===0){
            i=i/2
        }
        else if(i%3===0){
        i=i/3
        }
        else if(i%5===0){
            i=i/5
        }
    else
        break;
    }
        if(i===1){
            arr.push(temp)
            temp++
        
        }
        else{
            temp++
        }
    
    }

    return arr[n-1]
};
