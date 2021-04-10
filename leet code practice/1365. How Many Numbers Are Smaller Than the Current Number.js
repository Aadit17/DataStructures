/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    var map=new Map()
    let org=[...nums]
    nums.sort((a,b)=>a-b)
    console.log(nums)
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])) map.set(nums[i],i)
        
    }
    var res=[]
    for(let i=0;i<org.length;i++){
        res.push(map.get(org[i]))
    }

    // console.log(org)
    return res
};