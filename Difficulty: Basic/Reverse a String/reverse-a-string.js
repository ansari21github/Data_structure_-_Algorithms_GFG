// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {

    reverseString(s) {
        // code here
        // let str = '';
        
        // for(let i=s.length-1; i>=0; i--){
        //     str += s[i];
        // }
        // return str;
        
        return s.split('').reverse().join('');
        
//         In JavaScript, strings are immutable, so concatenating creates a new string each time.

// First iteration: copies 1 char

// Second iteration: copies 2 chars

// …

// Last iteration: copies n chars

// 👉 Total work = 1 + 2 + 3 + ... + n = O(n²)

// Space Complexity

// You’re building a new string str of size n → O(n) extra space.

// So:

// Time: O(n²)

// Space: O(n)



// s.split('') → Creates an array of length n. O(n) time, O(n) space.

// .reverse() → Reverses the array in-place. O(n) time, O(1) extra space (just swaps).

// .join('') → Builds a new string of length n. O(n) time, O(n) space.

// 👉 Total time = O(n) + O(n) + O(n) = O(n)
// 👉 Total space = array O(n) + result string O(n) → O(n)
    }
}