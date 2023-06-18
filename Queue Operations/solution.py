#User function Template for python3
class Solution:
    # Function to insert element into the queue
    def insert(self, q, k): 
        #code here
        q.append(k)
        
    # Function to find frequency of an element
    # return the frequency of k
    def findFrequency(self, q, k):
        # code here
        frequency = 0
        
        for i in q:
            if i == k:
                frequency += 1
        
        return frequency