//User function Template for javascript

/**
 * @param {string} S
 * @return {string[]}
 */

class Solution {
  find_permutation(S){
      //code here
      let arr = [];
      this.permutations(S.split(''), 0, S.length, arr);
      arr = new Set(arr.sort());
      return [...arr];
  }
  
  permutations(S, index, len, arr) {
      if (index >= len) {
          arr.push(S.join(''))
          return;
      }
      
      for(let i = index; i < len; i++) {
          
          [S[i], S[index]] = [S[index], S[i]];
          
          this.permutations(S, index + 1, len, arr);
          
          [S[i], S[index]] = [S[index], S[i]];
      }
  }
}