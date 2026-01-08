/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    romanToDecimal(s) {
        // code here
        let obj = {
            
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }
        
        let sum = 0;
        let i=0;
        while(i<s.length){
            if(obj[s[i]] < obj[s[i+1]]){
                sum +=  obj[s[i+1]] - obj[s[i]];
                i += 2;
            }else{
                sum +=  obj[s[i]];
                i += 1;
            }
        }
        
        return sum;
    }
}