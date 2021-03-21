/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    var map={}
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]>0)
            map[nums[i]]++
        else{
            map[nums[i]]=1
        }
    }
    var sum=0
    for(key in map){
        if(map[key]===1)
            sum+=parseInt(key)
            
    }
    return sum;
};