var maxProduct = function(nums) {
    

    var max_ovarall=nums[0]
    var max_end=nums[0]
    var min_end=nums[0]
    // console.log(max)
    for(let i=1;i<nums.length;i++){
        
        if(nums[i]==0){
            max_end=0
            min_end=0
        }
        let prev_max = max_end
        max_end=Math.max(nums[i],max_end*nums[i],min_end*nums[i])
        min_end=Math.min(nums[i],min_end*nums[i],prev_max*nums[i])
        
        max_ovarall=Math.max(max_ovarall,max_end)
    }
    return max_ovarall
};