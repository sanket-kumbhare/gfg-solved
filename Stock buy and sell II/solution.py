
from typing import List

class Solution:
    def stockBuyAndSell(self, n : int, prices : List[int]) -> int:
        # code here
        prices.append(0)
		
        buy = 0
        sell = 0
        profit = 0
        
        for i in range(n):
            if prices[i] < prices[i + 1]:
                sell = i + 1
            else:
                if(buy < sell):
                    profit += (prices[sell] - prices[buy])
                buy = i + 1
		
    	return profit