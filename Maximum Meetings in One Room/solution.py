from typing import List

class Solution:
    def maxMeetings(self, N : int, S : List[int], F : List[int]) -> List[int]:
        # code here
        meetings = [];
        
        for i in range(N):
            meetings.append((S[i], F[i], i+1))
        
        meetings = sorted(meetings, key=lambda x: x[1])
        endTime = meetings[0][1];
        meetingsHappened = [meetings[0][2]]
        
        for i in range(1, N):
            if endTime < meetings[i][0]:
                endTime = meetings[i][1]
                meetingsHappened.append(meetings[i][2])
                
        meetingsHappened.sort()
        
        return meetingsHappened

