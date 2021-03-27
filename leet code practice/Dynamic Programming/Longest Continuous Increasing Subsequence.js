/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    if(nums.length===0)
        return 0
    var list=[]
    list[0]=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1])
            list[i]=1+list[i-1]
        else
            list[i]=1
    }
    return Math.max(...list)
};