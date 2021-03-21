var containsDuplicate = function(nums) {
    var map={}
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]>0){
            map[nums[i]]+=1
            if(map[nums[i]]>1){
                return true
                break
            }
        }else{
            map[nums[i]]=1
        }
    }
    return false
};