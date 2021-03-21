var maxAbsoluteSum = function(nums) {
    
    var max_end=nums[0]
    var min_end=nums[0]
    var sum1=nums[0]
    var sum2=nums[0]
    var max_overall=nums[0]
    
    for(let i=1;i<nums.length;i++){
       if(sum1<0)
           sum1=0
        sum1+=nums[i]
        max_end=Math.max(nums[i],sum1,max_end)
        
        if(sum2>0)
           sum2=0
        sum2+=nums[i]
      
         min_end=Math.min(nums[i],min_end,sum2)
        
        max_overall=Math.max(Math.abs(min_end),max_end)
    }
     console.log(max_end)
     console.log(min_end)
     
     return Math.abs(max_overall)
    
 };