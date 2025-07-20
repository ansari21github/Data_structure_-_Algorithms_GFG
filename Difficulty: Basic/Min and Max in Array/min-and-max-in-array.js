// User function Template for javascript
// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    getMinMax(arr) {
        // code here
        let n = arr.length;
        if(n<2) return [arr[0],arr[0]];
        
        let min = arr[0];
        let max = arr[0];
        
        for (let i=0; i<n; i++){
            if(arr[i]<min){
                min = arr[i];
            }else if(arr[i]>max){
                max = arr[i];
            }
        }
        
        return [min , max];
    }
}