// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {

    reverseString(s) {
        // code here
        let str = '';
        
        for(let i=s.length-1; i>=0; i--){
            str += s[i];
        }
        return str;
    }
}