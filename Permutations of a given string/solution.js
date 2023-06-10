//User function Template for javascript

/**
 * @param {string} S
 * @return {string[]}
 */

class Solution {
  find_permutation(S){
      //code here
      let arr = [];
      
      this.permutations(S.split(''), 0, arr);
      
      arr = new Set(arr.sort());
      
      return [...arr];
  }
  
  permutations(S, index, arr) {
      
      if (index >= S.length) {
          arr.push(S.join(''))
          return;
      }
      
      for(let i = index; i < S.length; i++) {
          
          [S[i], S[index]] = [S[index], S[i]];
          
          this.permutations(S, index + 1, arr);
          
          [S[i], S[index]] = [S[index], S[i]];
      }
  }
}