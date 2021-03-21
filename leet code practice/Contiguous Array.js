var findMaxLength = function(nums) {
    let map = {0:-1}

    var count=0
    var maxlen=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1)
            count++;
        else
            count--
        if(map[count] != null){
            maxlen=Math.max(maxlen,i-map[count])
            console.log(maxlen)
        }
        else
            map[count]=i
    }
    console.log(map)
    return maxlen
};