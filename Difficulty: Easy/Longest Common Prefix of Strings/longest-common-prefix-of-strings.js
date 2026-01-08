// User function Template for javascript
/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */
class Solution {
    longestCommonPrefix(arr) {
        // code here
        if(!arr.length) return "";
        
        let prefix = arr[0];
        
        for(let i=1; i<arr.length; i++){
            while(!arr[i].startsWith(prefix)){
                prefix = prefix.slice(0,-1)
                
                if(prefix === "") return "";
            }
        }
        
        return prefix;
    }
} 