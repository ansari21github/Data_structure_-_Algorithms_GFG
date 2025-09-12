/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
 */

class Solution {
    // Function to partition the array around the range such
    // that array is divided into three parts.
    threeWayPartition(arr, a, b) {
        let low = 0, mid = 0, high = arr.length - 1;

        while (mid <= high) {
            if (arr[mid] < a) {
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
            } else if (arr[mid] > b) {
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
            } else {
                mid++;
            }
        }

        // On GFG, you don’t return array, you just modify in place
        return true;
    }
}