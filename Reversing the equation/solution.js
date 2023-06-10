//User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */
class Solution {
  reverseEqn(s) {
      //code here
      let split = s.split(/([+\-*/])/).filter(Boolean);
      
      return split.reverse().join("")
  }
}