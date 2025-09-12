/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    transitionPoint(arr) {
        // code here
        if(arr[0] === 1)return 0;
        if(arr[arr.length-1] === 0)return -1;
        
        for(let i=0; i<arr.length; i++){
            if(arr[i] === 1){
                return i;
            }
        }
    }
}