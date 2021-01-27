/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var map=new Map()
    
    for(let i=0; i<nums.length;i++){
        if(map[nums[i]]>=1){
            map[nums[i]]+=1
            
        }
        else{
            map[nums[i]]=1
        }
    }
    console.log(map)
    
    for(key in map){
        if(map[key]>(nums.length/2))
            return key;
    }
    
    
};