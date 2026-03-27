// User function Template for javascript
/**
 * @param {string} S1
 * @param {string} S2
 * @returns {boolean}
 */

class Solution {
    // Function to check if the given strings are meta strings or not.
    metaStrings(S1, S2) {
        // your code here
        if(S1.lenght !== S2.lenght) return false;

        if(S1 === S2) return false;
        
        let diff = [];
        
        for(let i = 0; i<S1.length; i++){
            if(S1[i] !== S2[i]){
                diff.push(i);
            }
        }
        
        if(diff.length !== 2) return false;
        
        let [i,j] = diff;
        
        return(
            
            S1[i] === S2[j] && 
            S1[j] === S2[i]
            );
        
    
    }
}