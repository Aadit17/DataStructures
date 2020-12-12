// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.





// var lengthOfLongestSubstring = function(s) {
//    var map = {}
//    var result=[]
//    var count = 0
//    var j=0
//     for(let i=0;i<s.length;i++){
//         if(Object.keys(map).find(ele=>ele==s[i])){
//             result.push(count)
//             count=0
//             j=map[s[i]]+1
//             i=j;
//             map= new Map()
//         }
//         count++;
//         map[s[i]]=i;

//     }
//     result.push(count);
//     return Math.max(...result);
// };

// console.log(lengthOfLongestSubstring("dvdf"))



// 2nd optimize method using sliding window


   
var lengthOfLongestSubstring = function(s) {
   var map = {}
   var count = 0
   var max=0
   var left=0;
   

    for(let i=0;i<s.length;i++){
        if(map[s[i]]>=left){
            left=map[s[i]]+1;
           
             }
             
        
        
        // console.log(result)
        map[s[i]]=i;
       max=Math.max(max,(i-left+1))
          
    }
    
    return max;
};

console.log(lengthOfLongestSubstring("pwwke"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring(""))
