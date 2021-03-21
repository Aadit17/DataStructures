/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


var nextGreaterElement = function(nums1, nums2) {
    let stack=[];
    let arr=[];
    for(let i=0;i<nums1.length;i++){
        stack=[];
        let flag=0;
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                var value=j;
                break
            }
        }
             for(let k=nums2.length-1;k>value;k--){
                    stack.push(nums2[k]);
            }
             while(stack.length!==0){
                check=stack.pop();
                    if(check>nums2[value]){
                     arr.push(check);
                        flag=1;
                        break;
                    }
                }
        
        if(flag==0){
            arr.push(-1)
        }
    }
    return arr
};