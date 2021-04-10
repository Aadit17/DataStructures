/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     if(nums.length===0)
//         return 0
//     if(nums.length===1)
//         return nums[0]
//     if(nums.length===2)
//         return Math.max(nums[0],nums[1])
//     var dp1=[]
//     var dp2=[]
//     dp1[0]=nums[0]
//     dp1[1]=Math.max(nums[0],nums[1])
    
//     dp2[0]=0
//     dp2[1]=nums[1]
    
//     for(let i=2;i<nums.length-1;i++){
//         dp1[i]=Math.max(nums[i]+dp1[i-2],dp1[i-1])
//     }
//     for(let i=2;i<nums.length;i++){
//         dp2[i]=Math.max(nums[i]+dp2[i-2],dp2[i-1])
//     }
//     console.log(dp1,dp2)
//     return Math.max(dp1.pop(),dp2.pop())
    
// };



var rob = function(nums) {
    if (nums.length < 2) {
        return nums[0] || 0;
    }
    
    const memo1 = [nums[0]];
    const memo2 = [0, nums[1]];
    
    for (let i=1; i<nums.length - 1; i++) {
        memo1[i] = Math.max(nums[i] + (memo1[i - 2] || 0), memo1[i - 1]);
    }
    
    for (let i=2; i<nums.length; i++) {
        memo2[i] = Math.max(nums[i] + memo2[i - 2], memo2[i - 1]);
    }
    
    return Math.max(memo1.pop(), memo2.pop());
};





