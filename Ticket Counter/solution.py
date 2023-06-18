class Solution:
    def distributeTicket(self, N : int, K : int) -> int:
        # Code Here
        flag = True
        start = 0
        end = N + 1
        visited = 0
        
        while start <= end:
            visited += K
            if visited < N:
                if flag:
                    start += K
                else:
                    end -= K
                flag = not flag
            else:
                break
        
        if flag:
            return end - 1
        else:
            return start + 1