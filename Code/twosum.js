// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


//Ist approach if elements of all testcases are sorted

// const pair= (array,target) =>{
//     array.sort();
//     console.log(array,target);
// let p1=0;
// let p2=array.length-1

// while(p1<p2){
//   let sum=array[p1]+array[p2];

//   if(sum>target){
//       p2--;
//   }
//   else if(sum==target){
//     return ([p1,p2])
//   }
//   else{
//       p1++;
//   }
// }


    
// }

// console.log(pair([2,7,11,15],9));


// 2nd approach if elements are not sorted 

//Best Approach


const pair= (array,target) =>{
    // var object={'2':3,'7':9,'6':10}
    // console.log(object);
    // console.log(Object.keys(object));
    // console.log(object[2]);
    object={}
    for(let i=0;i<array.length;i++){ 
          if(object==null){
              object[target-array[i]]=i;
          }
          else{
              if(Object.keys(object).find(ele=>ele==array[i])){
            
                   return[object[array[i]],i]
              }
              else{
                  object[target-array[i]]=i;
              }
          }

    } return([]);
}

console.log(pair([2,5,4],7))