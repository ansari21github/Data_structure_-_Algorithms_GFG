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
        
        if(n===0)return null;
        if(n<2) return [arr[0],arr[0]];
        
        let min , max;
        let i;
        
        
        if(n%2 === 0){
            if(arr[0] < arr[1]){
                min = arr[0];
                max = arr[1];
            }else{
                max = arr[0];
                min = arr[1];
            }
            
            i = 2;
        }else{
            min = arr[0];
            max = arr[0];
            
            i = 1;
        }
        
        while(i < n-1){
            let localMin , localMax;
            
            if(arr[i] < arr[i+1]){
                localMin = arr[i];
                localMax = arr[i+1];
            }else{
                localMin = arr[i+1];
                localMax = arr[i];
            }
            
            min = Math.min(min,localMin)
            max = Math.max(max,localMax)
            
            i += 2;
        }
        
        return [min,max];
    }
}