/**
 * @param {string} str
 * @returns {string}
 */
class Solution {
    getMaxOccuringChar(s) {
        let obj = {};
        let maxCount = 0;
        let result = '';
        
        
        for(let char of s){
            if(!obj[char]){
                obj[char] = 1;
            }else{
                obj[char] += 1;
            }
            
            if(obj[char] > maxCount || 
               (obj[char] === maxCount && char < result)){
                   
                   maxCount = obj[char];
                   result = char;
               }
        }
    
        return result;
    }
}