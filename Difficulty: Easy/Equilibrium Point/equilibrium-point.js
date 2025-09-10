// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find equilibrium point in the array.
    findEquilibrium(arr) {
        let totalSum = arr.reduce((a, b) => a + b, 0); 
        let leftSum = 0;

        for (let i = 0; i < arr.length; i++) {
            totalSum -= arr[i]; 

            if (leftSum === totalSum) {
                return i; 
            }

            leftSum += arr[i]; 
        }

        return -1; 
    }
}