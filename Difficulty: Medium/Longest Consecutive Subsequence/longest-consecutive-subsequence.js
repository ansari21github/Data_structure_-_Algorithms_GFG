/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    longestConsecutive(arr) {
         let set = new Set(arr);
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {

        // If previous number exists, this is not the start of a sequence
        if (set.has(arr[i] - 1)) {
            continue;
        }

        // Start counting from current number
        let current = arr[i];
        let count = 1;

        while (set.has(current + 1)) {
            current++;
            count++;
        }

        maxLength = Math.max(maxLength, count);
    }

    return maxLength;
        
    }
}