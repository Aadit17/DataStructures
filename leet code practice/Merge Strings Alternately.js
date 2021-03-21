/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    var i=0
    var newstr=""
    while(i<word1.length && i<word2.length){
        newstr+=word1[i] + word2[i]
        i++
    }
    while(i<word1.length){
        newstr+=word1[i++]
    }
     while(i<word2.length){
        newstr+=word2[i++]
    }
    
    return newstr
    
};