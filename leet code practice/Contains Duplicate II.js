var containsNearbyDuplicate = function(nums, k) {
    var map={}
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]>=0){
        
            if((Math.abs(i-map[nums[i]]))<=k)
                return true
            else{
                map[nums[i]]=i
            }
        }else{
            map[nums[i]]=i
        }
    }
    console.log(map)
    return false
};