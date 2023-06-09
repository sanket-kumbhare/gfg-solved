//User function Template for javascript

/**
 * @param {Node} root
 * @param {number} k
 * @returns {number}
*/

class Solution 
{
    //Function to find the least absolute difference between any node
    //value of the BST and the given integer.
    minDiff(root, k)
    {
        //your code here
        let current = root;
        let diff = k;
        
        while (current != null) {
            
            diff = Math.min(diff, Math.abs(k - current.data))
            
            if (k < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            
        }
        
        return diff;
        
    }
}