/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        nums[i]=sum;
    }
    return nums
};