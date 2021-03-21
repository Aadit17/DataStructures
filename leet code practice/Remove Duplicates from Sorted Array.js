/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    var count=1
    var start=1;
    
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            count++;
            nums[start++]=nums[i]
        }
    }
    return count
    
};