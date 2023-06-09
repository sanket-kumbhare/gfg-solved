//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
*/

class Solution {
    //Function to merge the arrays.
    merge(arr1, arr2, n, m)
    {
        //your code here
        let i1 = 0;
        let i2 = 0;
        
        let j1 = n - 1
        let j2 = m - 1;
        let k = m
        while (arr1[j1] > arr2[i2]) {
        
            if (arr1[i1] > arr2[i2]) {
                let arr1Last = arr1[n - 1];
                arr1.splice(i1, 0, arr2[i2]);
                arr1.pop();
                
                while (arr1Last < arr2[k - 1]) {
                    k--;
                }
                
                arr2.splice(k, 0, arr1Last);
                arr2.shift();
            }
            
            i1++;
            
        }
    }
}