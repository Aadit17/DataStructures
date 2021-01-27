
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)

    
    var triplet=[]
    var arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
           continue;
        }
        var map=new Map ()
        for(let j=i+1;j<nums.length;j++){
            var sum=(nums[i]+nums[j])
    
            if(map.has(-sum)){
                arr.push(nums[j])
                arr.push(sum-2*sum)
                arr.push(nums[i])
        
              triplet.push(arr)
                arr=[]
            }map[nums[j]]=j;
        }
    }
    return triplet;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([]))
console.log(threeSum([2,4,6]))