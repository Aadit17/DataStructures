var checkSubarraySum = function(nums, k) {
     
    for(let i=0;i<nums.length;i++){
        var sum=nums[i];
        for(let j=i+1;j<nums.length;j++){
            sum+= nums[j]
            if(sum === 0 && k===0)
               return true;
            if(sum%k === 0)
             return true;
            
        }
    }
    return false;
};

console.log(checkSubarraySum([23, 2, 6, 4, 7],6))