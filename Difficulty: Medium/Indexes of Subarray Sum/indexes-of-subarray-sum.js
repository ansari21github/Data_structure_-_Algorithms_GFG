// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */

class Solution {
    subarraySum(arr, target) {
       let n = arr.length;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < n; end++) {
      sum += arr[end];

      // Shrink window while sum > target
      while (sum > target && start <= end) {
        sum -= arr[start];
        start++;
      }

      // If found, return 1-based indices
      if (sum === target) {
        return [start + 1, end + 1];
      }
    }

    // If no subarray found
    return [-1];
    }
}