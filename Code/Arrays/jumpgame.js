var canJump = function(nums) {
    var i=0;
     var max=0;
    while(i<=max){
        
    
        var p2=i+nums[i];
       max=Math.max(max,p2);
      i++
        if(max>=nums.length-1)
           return true;
        
    }
    return false;
};


console.log(canJump([2,3,1,1,4]))