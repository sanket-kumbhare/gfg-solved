class Solution:
    def leastPrimeFactor (self, n):
        # code here 
        op = [0, 1]
        for i in range(2, n + 1):
            for j in range(2, int(i ** 0.5)+1):
                if i % j == 0:
                    op.append(j)     
                    break
            else:
                op.append(i)
        return op

