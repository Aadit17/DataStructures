class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        dic = defaultdict(list)
        for i in range(len(nums)):
            print(nums[i])
            if dic[nums[i]] :
                dic[nums[i]]+=1
            else:
                dic[nums[i]]=1
        sum = 0
        for key in dic :
            if dic[key]==1 :
                sum+=key
            
        return sum
                     
            
        