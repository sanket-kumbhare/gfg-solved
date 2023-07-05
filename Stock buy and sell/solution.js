//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @returns {number[][]}
*/

class Solution {
    //Function to find the days of buying and selling stock for max profit.
    stockBuySell(A, n)
    {
        //your code here
        let ans = []
        for(let i = 0; i < n - 1; i ++) {
            if(A[i] < A[i+1]) {
               ans.push([i, i+1])
            }
        }
        return ans
    }
}