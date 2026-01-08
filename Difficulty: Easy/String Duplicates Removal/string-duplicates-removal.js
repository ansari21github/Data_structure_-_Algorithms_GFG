// User function Template for javascript

/**
 * @param {string} n
 * @return {string}
 */

class Solution {
    removeDuplicates(s) {
        // code here
       const map = {};
        const result = [];

        for (let ch of s) {
            if (!map[ch]) {
                result.push(ch);
            }
            map[ch] = 1;
        }

        return result.join('');
    }
}