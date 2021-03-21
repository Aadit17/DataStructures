/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var count=1;
    var candidate=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]===candidate){
            count++;
        }
        else{
            count--;
            if(count===0){
            candidate=nums[i];
                count=1;
            }
        }
    }
    
    return candidate;
    
};