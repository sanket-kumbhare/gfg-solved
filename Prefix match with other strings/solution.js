//User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
 * @param {number} k
 * @param {string} str
 * @return {number} 
*/

class Solution {
  klengthpref(arr,n,k,str){
    //code here
    if (k > str.length) {
        return 0;
    }
    
    let substring = str.substring(0, k);
    let prefixMatchCount = 0;
    
    for (let string of arr) {
        if(string.startsWith(substring)) {
            prefixMatchCount += 1;
        }
    }
    
    return prefixMatchCount;
  }
}