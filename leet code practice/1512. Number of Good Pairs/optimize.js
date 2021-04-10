/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    var map=new Map()
    var count=0
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){ 
            count+=map.get(nums[i])
            map.set(nums[i],map.get(nums[i])+1)
        }
    
        else 
            map.set(nums[i],1)
        
    }

    // console.log(map)
    return count
};