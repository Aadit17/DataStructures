/**
 * @param {number[]} nums
 * @return {number}
 */
 var countNicePairs = function(nums) {
    
    const rev=(x)=>{
        var res=0
        while(x>0){
            var last=x%10
            x=Math.floor(x/10)
            res=res*10+last
        }
        return res
    }
    var count=0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+rev(nums[j])===rev(nums[i])+nums[j])
                count++
            
        }
    }
    return count
}