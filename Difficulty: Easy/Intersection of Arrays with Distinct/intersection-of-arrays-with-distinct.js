/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
class Solution {
    intersectSize(a, b) {
        // code here
        let setB = new Set(b);
        let count = 0;
        
       for(let i=0; i<a.length; i++){
           if(setB.has(a[i])){
               count++;
           }
       }
        
        return count;
    }
}