// User function Template for javascript
/**
 * @param {string} S1
 * @param {string} S2
 * @returns {string}
 */

class Solution {
    // Function to merge two strings.
    merge(S1, S2) {
        // your code here
        let str = '';
        
        let sl1 = S1.length;
        let sl2 = S2.length;
        
        let i=0;
        
        while(i<sl1 || i<sl2){
            if(i < sl1) str += S1[i];
            if(i < sl2) str += S2[i];
            i++;
        }
        
        return str;
    }
}