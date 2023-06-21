//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 */
 
class Solution {
    
    //Function to rearrange an array so that arr[i] becomes arr[arr[i]]
    //with O(1) extra space.
    arrange(arr, n){
        // code here
        for(let i = 0; i < n; i++) {
            arr[i] = (n * (arr[arr[i]] % n)) + arr[i]
        }
        
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(arr[i] / n)
        }
    }
}