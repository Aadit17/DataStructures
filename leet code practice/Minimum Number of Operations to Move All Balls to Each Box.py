class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        arr=[]
        res=[]
        for i in range(len(boxes)):
            if boxes[i] == "1" :
                arr.append(i)
    
        for i in range(len(boxes)):
            sum=0
            for j in arr :
                sum+=abs(j-i)
            res.append(sum)
        return res
            