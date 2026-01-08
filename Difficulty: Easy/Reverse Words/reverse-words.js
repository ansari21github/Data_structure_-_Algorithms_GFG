/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
    reverseWords(s) {
        // code here
        let arr = s.split('.')
    let arr1 = [];
    
    for(let val of arr){
        if(val != ""){
            arr1.push(val);
        }
    }
    return arr1.reverse().join('.');
    }
}