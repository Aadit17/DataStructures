//Q Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16
// Example 4:

// Input: height = [1,2,1]
// Output: 2
 

// Constraints:

// n = height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104




// Ist approach brut force not a good approach

// const maxArea = (array) =>{
//     var max=0;
  
//     for(let i=0;i<array.length; i++){
//         for(let j=i+1;j<array.length;j++){
//             if(array[j]<=array[i]){
//                 var area=array[j]*(j-i)
                
//                 if(area>max)
//                  max=area
//             }
//             else{
                
//                 area=array[i]*(j-i);
//                 if(area>max)
//                 max=area;
//             }
//         }
//     }
//     return max;
// }





// 2nd approach finding rightmax and leftmax

const maxArea = (array) =>{
    var max=0;
    var p1=0;
    var p2=array.length-1;
  
    while(p1<p2){
        
            if(array[p1]<=array[p2]){
                var area=array[p1]*(p2-p1)
                p1++
                if(area>max)
                 max=area
            }
            else{
                
                area=array[p2]*(p2-p1);
                p2--
                if(area>max)
                max=area;
            }
        }
    
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))