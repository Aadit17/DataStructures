class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i=0
        newstr=""
        while i<len(word1) and i<len(word2) :
            newstr+=word1[i] + word2[i]
            i+=1
    
        while i<len(word1):
            newstr+=word1[i]
            i+=1
    
        while i<len(word2) :
            newstr+=word2[i]
            i+=1
    
        return newstr
        