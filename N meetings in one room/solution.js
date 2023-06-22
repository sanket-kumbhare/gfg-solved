//User function Template for javascript

/**
 * @param {number[]} start
 * @param {number[]} end
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    maxMeetings(start, end, n)
    {
        // code here
        let schedule = [];
        
        let meetingCount = 1;
        
        
        for(let i = 0; i < n ; i++) {
            schedule.push([start[i], end[i]]);
        }
        
        schedule.sort((a, b) => a[1] - b[1]);
        
        let meetingEnd = schedule[0][1];
        
        for(let i = 1; i < n; i++) {
            if(meetingEnd < schedule[i][0]) {
                meetingCount += 1;
                meetingEnd = schedule[i][1];
            }
        }
        
        return meetingCount;
        
    }
}