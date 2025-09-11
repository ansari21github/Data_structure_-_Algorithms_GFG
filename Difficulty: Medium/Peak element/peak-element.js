/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    peakElement(arr) {
      let n = arr.length;

        // If single element, it's a peak
        if (n === 1) return 0;

        // Check first element
        if (arr[0] > arr[1]) return 0;

        // Check last element
        if (arr[n - 1] > arr[n - 2]) return n - 1;

        if(n>2){
            for (let i = 1; i < n - 1; i++) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                return i;
            }
        }
        }
        

        return -1; // fallback (shouldn't happen)
    
    //   let n = arr.length;
    //     let low = 0, high = n - 1;

    //     while (low <= high) {
    //         let mid = Math.floor((low + high) / 2);

    //         // Check if mid is a peak
    //         if (
    //             (mid === 0 || arr[mid] > arr[mid - 1]) &&
    //             (mid === n - 1 || arr[mid] > arr[mid + 1])
    //         ) {
    //             return mid;
    //         }

    //         // If left neighbor is greater, peak lies on the left side
    //         if (mid > 0 && arr[mid - 1] > arr[mid]) {
    //             high = mid - 1;
    //         } else {
    //             // Else peak lies on the right side
    //             low = mid + 1;
    //         }
    //     }

    //     return -1; // should not happen given constraints
    }
}