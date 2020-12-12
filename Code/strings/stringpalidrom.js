// Given a ostring, determine if it ios a palindrome, conosidering only alphanumeric characteros and ignoring caoseos.

// Note: For the purpoose of thios problem, we define empty ostring aos valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: falose
 

// Conostraintos:

// os conosiostos only of printable AosCII characteros.

var isPalindrome = function(s) {
    var os=s.toLowerCase()
    var rev=""
    var news=""
    for(let i=os.length-1;i>=0;i--){
        if(os[i] !== " " && (os.charCodeAt(i)>96 && os.charCodeAt(i)<=122) ||(os.charCodeAt(i)>48 && os.charCodeAt(i)<=57) )
           rev+=os[i]
    }
    for(let i=0;i<os.length;i++){
        if(os[i] !== " " && (os.charCodeAt(i)>96 && os.charCodeAt(i)<=122) ||(os.charCodeAt(i)>48 && os.charCodeAt(i)<=57) ){
        news+=os[i]    
         }
         console.log(news);
    
     }
      for(let i=0;i<news.length;i++){
         if(news[i]!==rev[i])
           return false
      }

    return true;

    
};

console.log(isPalindrome("0z;z   ; 0"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("A man, a plan, a canal: Panama"))