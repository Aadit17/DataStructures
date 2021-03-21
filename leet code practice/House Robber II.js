var rob = function(nums) {
    if (nums.length < 2) {
        return nums[0] || 0;
    }
    var memo1=[]
    var memo2=[]
     memo1[0] = nums[0];
     memo1[1] = Math.max(nums[0],nums[1])
     memo2[0] = 0
     memo2[1] = nums[1]
    
    for (let i=2; i<nums.length - 1; i++) {
        memo1[i] = Math.max(nums[i] + memo1[i - 2] , memo1[i - 1]);
    }
    
    for (let i=2; i<nums.length; i++) {
        memo2[i] = Math.max(nums[i] + memo2[i - 2], memo2[i - 1]);
    }
         console.log(memo1)
    
    return Math.max(memo1.pop(), memo2.pop());
};
