#User function Template for python3

class Solution:
    def lemonadeChange(self, N, bills):
        # Code here
        coins = {5: 0, 10: 0, 20: 0}
        
        for i in bills: 
            if i == 5:
                coins[5] += 1
            elif i == 10 and coins[5] > 0:
                coins[5] -= 1
                coins[10] += 1
            elif i == 20 and coins[10] > 0 and coins[5] > 0:
                coins[10] -= 1
                coins[5] -= 1
                coins[20] += 1
            elif i == 20 and coins[5] > 2:
                coins[5] -= 3
                coins[20] += 1
            else:
                return False
                
            # print(i)
                
        return True