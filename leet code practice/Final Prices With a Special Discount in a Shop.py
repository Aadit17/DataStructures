class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        res=[]
        for i in range(len(prices)):
            finalprice=prices[i]
            for j in range(i+1,len(prices)):
                if prices[j]<=prices[i]:
                    finalprice=prices[i]-prices[j]
                    break
            res.append(finalprice)
        return res