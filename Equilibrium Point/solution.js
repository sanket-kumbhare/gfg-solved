//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {
  // Function to find equilibrium point in the array.
  equilibriumPoint(arr, n)
  {
      //your code here
      let total = 0
      
      arr.forEach(item => total += item)
      
      let left = 0
      let right = total
      
      for(let i = 0; i < n; i++) {
          if (i > 0) {
              left += arr[i-1]
          }
          right -= arr[i]
          if (left == right) {
              return i+1
          }
      }
      
      return -1
  }
}