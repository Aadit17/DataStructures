/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    const rev=(x)=>{
        var reverse=0;
        while(x>0){
      reverse=reverse*10+x%10;
        x=Math.floor(x/10);
    }
        return reverse;
    }
    var res;
    if(x<0){
        res= -rev(-x);
    
    }
        else
            res= rev(x)
    
    if(res>Math.pow(2,31)||res<Math.pow(-2,31)){
        return 0;
    }
    else{
        return res
    }
};