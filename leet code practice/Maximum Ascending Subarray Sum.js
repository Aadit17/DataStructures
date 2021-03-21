var maxAscendingSum = function(nums) {
    var sum=nums[0]
    var max=nums[0]
    
    for(let i=1;i<nums.length;i++){
        
        if(nums[i]<=nums[i-1]){
            sum=0
        }
        sum+=nums[i]
        max=Math.max(max,sum)
        console.log(sum)
    }
    return max
};