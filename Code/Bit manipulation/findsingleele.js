var xorsum=0
const find=(nums)=>{
for(let i=0;i<nums.length;i++){
    xorsum^=nums[i]
    // console.log(xorsum)
}
return xorsum
};

console.log(find([1,5,2,6,6,1,5]))