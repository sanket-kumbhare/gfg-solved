//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to count inversions in the array.
    inversionCount(arr, N)
    {
        //your code here
        let count = this.mergeSort(arr, 0, N - 1);
        return count;
        
    }
    
    mergeSort(arr, s, e) {
        if (s >= e) {
            return 0;
        }
        
        let m = Math.floor((s + e) / 2);
        
        let inversion_count = 0;
        
        inversion_count += this.mergeSort(arr, s, m);
        
        inversion_count += this.mergeSort(arr, m + 1, e);
        
        inversion_count += this.merge(arr, s, m, e);
        
        return inversion_count;
    }
    
    merge(arr, s, m, e) {
        let i1 = 0;
        let i2 = 0;
        let n1 = m - s + 1;
        let n2 = e -m ;
        let k = s;
        let inversion_count = 0;
        
        let left = new Array(n1);
        let right = new Array(n2);
        
        for(let i = 0; i < n1; i++) {
            left[i] = arr[s + i];
        }
        
        for(let j = 0; j < n2; j++) {
            right[j] = arr[m + 1 + j]
        }
        
        while (i1 < n1 && i2 < n2) {
            if(left[i1] <= right[i2]) {
                arr[k] = left[i1];
                i1 += 1;
            } else {
                arr[k] = right[i2];
                i2 += 1;
                inversion_count += (m + 1) - (s + i1)
            }
            k += 1;
        }
        
        while (i1 < n1) {
            arr[k] = left[i1];
            i1 += 1;
            k += 1;
        }
        
        while (i2 < n2) {
            arr[k] = right[i2];
            i2 += 1;
            k += 1;
        }
        
        return inversion_count;
        
    }
}