var maxSubArray = function(nums) {
    var max=nums[0]
    var sum=nums[0]
    for(let i=1;i<nums.length;i++){
    
        if(sum<0)
            sum=0
        sum+=nums[i]
        max=Math.max(max,sum)
     
    }
    return max
};